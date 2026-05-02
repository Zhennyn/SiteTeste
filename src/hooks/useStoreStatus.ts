import { useState, useEffect, useCallback } from 'react';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface StoreStatusHook {
  isOpen: boolean;
  shippingPrice: number;
  distance: string; // Ex: "5.2 km"
  error: string | null;
  calculateShipping: (userCoords?: Coordinates) => Promise<{ shippingPrice: number; distance: string; coordsUsed: Coordinates }>;
}

export const useStoreStatus = (): StoreStatusHook => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [distance, setDistance] = useState<string>('0.0 km');
  const [error, setError] = useState<string | null>(null);

  // Coordenadas fixas da Pizzaria do Baixinho
  const storeCoords: Coordinates = {
    latitude: -23.4735,
    longitude: -46.6341,
  };

  const checkIfOpen = useCallback((): boolean => {
    const now = new Date();
    const day = now.getDay(); // 0=Domingo, 1=Segunda, ..., 6=Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeInHours = hour + minute / 60;

    // Quarta a Domingo (0, 3, 4, 5, 6)
    const isOpenDay = [0, 3, 4, 5, 6].includes(day);
    // 19:30 (19.5) às 23:00 (23.0)
    const isOpenTime = timeInHours >= 19.5 && timeInHours <= 23.0;

    return isOpenDay && isOpenTime;
  }, []);

  useEffect(() => {
    // Define o status inicial
    setIsOpen(checkIfOpen());

    // Atualiza o status a cada minuto
    const interval = setInterval(() => {
      setIsOpen(checkIfOpen());
    }, 60000);

    return () => clearInterval(interval);
  }, [checkIfOpen]);

  // Fórmula de Haversine para cálculo de distância entre duas coordenadas
  const haversineDistance = (coords1: Coordinates, coords2: Coordinates): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // Raio da Terra em km

    const lat1 = toRad(coords1.latitude);
    const lat2 = toRad(coords2.latitude);
    const deltaLat = toRad(coords2.latitude - coords1.latitude);
    const deltaLng = toRad(coords2.longitude - coords1.longitude);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distância em linha reta
  };

  const getUserLocation = (): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocalização não suportada pelo seu navegador.'));
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          // Trata erros específicos de geolocalização
          switch (err.code) {
            case err.PERMISSION_DENIED:
              reject(new Error('Permissão de localização negada pelo usuário.'));
              break;
            case err.POSITION_UNAVAILABLE:
              reject(new Error('Informações de localização indisponíveis (erro de GPS).'));
              break;
            case err.TIMEOUT:
              reject(new Error('A requisição para obter a localização expirou.'));
              break;
            default:
              reject(new Error('Ocorreu um erro desconhecido ao obter a localização.'));
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    });
  };

  const calculateShipping = useCallback(async (userCoords?: Coordinates): Promise<{ shippingPrice: number; distance: string; coordsUsed: Coordinates }> => {
    try {
      setError(null); // Reseta erros antes de calcular

      // Obtém as coordenadas (usa as fornecidas ou busca no navegador)
      let coordsToUse = userCoords;
      if (!coordsToUse) {
        coordsToUse = await getUserLocation();
      }

      // Calcula distância em linha reta
      const rawDist = haversineDistance(storeCoords, coordsToUse);

      // Aplica fator de correção de 20% para o trajeto real nas ruas
      const correctedDist = rawDist * 1.2;
      const formattedDistance = `${correctedDist.toFixed(1)} km`;

      // Lógica de Preço
      // Até 5km: R$ 5,00
      let price = 5;

      if (correctedDist > 5) {
        // A cada 1km adicional acima de 5km: + R$ 1,00 (arredondado para cima)
        const additional = Math.ceil(correctedDist - 5);
        price += additional * 1;
      }

      // Atualiza os estados do Hook
      setDistance(formattedDistance);
      setShippingPrice(price);

      return { shippingPrice: price, distance: formattedDistance, coordsUsed: coordsToUse };
    } catch (err: any) {
      const errorMessage = err.message || 'Erro ao calcular frete.';
      setError(errorMessage);
      throw err;
    }
  }, []);

  return {
    isOpen,
    shippingPrice,
    distance,
    error,
    calculateShipping,
  };
};