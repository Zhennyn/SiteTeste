import React, { useState, useEffect } from 'react';
import { useStoreStatus } from '../hooks/useStoreStatus';

interface Coords {
  latitude: number;
  longitude: number;
}

const StoreStatusDemo: React.FC = () => {
  const { isOpen, shippingPrice, distance, calculateShipping } = useStoreStatus();
  const [userCoords, setUserCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Try to get user's geolocation on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const getLocation = () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError(`Error getting location: ${error.message}`);
          setLoading(false);
        }
      );
    };

    getLocation();
  }, []);

  // Calculate shipping when we have user coordinates
  useEffect(() => {
    if (userCoords) {
      calculateShipping(userCoords)
        .then(({ shippingPrice, distance }) => {
          // The hook already updates these values, but we can also use them here
          console.log('Shipping calculated:', { shippingPrice, distance });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [userCoords, calculateShipping]);

  return (
    <div className="p-6 bg-dark-surface rounded-xl border border-white/10">
      <h2 className="text-xl font-bold text-white mb-4">Store Status & Shipping</h2>

      {/* Store Status */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Store Status:</h3>
        <p className={`text-lg ${isOpen ? 'text-pizza-yellow' : 'text-gray-400'}`}>
          {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </p>
        {!isOpen && (
          <p className="text-sm text-gray-500 mt-1">
            Open Wednesday to Sunday, 7:30 PM to 11:00 PM
          </p>
        )}
      </div>

      {/* User Location & Shipping */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Your Location:</h3>
        {loading ? (
          <p className="text-gray-400">Getting your location...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : userCoords ? (
          <>
            <p className="text-gray-400">
              Latitude: {userCoords.latitude.toFixed(4)}, Longitude: {userCoords.longitude.toFixed(4)}
            </p>
            <div className="mt-2">
              <h4 className="text-sm font-medium text-white mb-1">Shipping Information:</h4>
              <p className="text-gray-300">Distance: {distance}</p>
              <p className="text-pizza-yellow font-bold text-xl">
                Shipping Cost: R$ {shippingPrice.toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-400">Unable to get location. Please check permissions.</p>
        )}
      </div>

      {/* Manual coordinates input for testing */}
      <div className="mt-6 p-4 bg-dark-bg rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-3">Test with Manual Coordinates:</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Latitude:
            </label>
            <input
              type="number"
              step="0.0001"
              placeholder="-23.4735"
              className="w-full px-3 py-2 bg-dark-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-pizza-yellow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Longitude:
            </label>
            <input
              type="number"
              step="0.0001"
              placeholder="-46.6341"
              className="w-full px-3 py-2 bg-dark-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-pizza-yellow"
            />
          </div>
          <button
            onClick={() => {
              // This would need to be implemented with form handling
              alert('Implement form handling to test manual coordinates');
            }}
            className="w-full bg-pizza-red text-white px-4 py-2 rounded-lg font-medium hover:bg-pizza-red-dark transition-colors"
          >
            Calculate Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreStatusDemo;