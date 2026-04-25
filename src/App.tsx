import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Pizza, 
  MessageCircle,
  Menu as MenuIcon,
  X,
  ArrowLeft
} from 'lucide-react';

const InstagramIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const fullMenuData = [
  {
    category: "Pizzas Salgadas",
    items: [
      { name: "Mussarela", desc: "Molho de tomate e queijo mussarela." },
      { name: "Marguerita", desc: "Molho de tomate, queijo, tomate e manjericão." },
      { name: "Frango Cremoso", desc: "Molho de tomate, frango desfiado e requeijão cremoso." },
      { name: "Portuguesa", desc: "Molho de tomate, presunto, cebola, mussarela, ovo, milho e ervilha." },
      { name: "Calabresa", desc: "Molho de tomate, calabresa e cebola." },
      { name: "Toscana", desc: "Molho de tomate, calabresa e mussarela." },
      { name: "Palmito", desc: "Molho de tomate, palmito e mussarela." },
      { name: "Escarola", desc: "Molho de tomate, escarola e mussarela." },
      { name: "Bacon", desc: "Molho de tomate, bacon e mussarela." },
      { name: "Pepperoni", desc: "Molho de tomate, pepperoni e mussarela." },
      { name: "Quatro Queijos", desc: "Molho de tomate, mussarela, requeijão cremoso, provolone e parmesão." },
      { name: "Carne Seca Cremosa", desc: "Molho de tomate, mussarela, carne seca e requeijão cremoso." },
      { name: "Carne Seca", desc: "Molho de tomate, mussarela e carne seca." },
      { name: "Frangole", desc: "Molho de tomate, frango desfiado e mussarela." },
      { name: "Caipirinha", desc: "Molho de tomate, frango desfiado, requeijão cremoso e milho." },
      { name: "Brocolis", desc: "Molho de tomate, mussarela e brocolis." },
      { name: "Calabresa Cremosa", desc: "Molho de tomate, calabresa e requeijão cremoso." },
      { name: "Pepperoni Supreme", desc: "Molho de tomate, mussarela, pepperoni e requeijão cremoso." },
      { name: "Bauru", desc: "Molho de tomate, mussarela, presunto e tomate." },
      { name: "Atum", desc: "Molho de tomate, atum e cebola." },
      { name: "Alho", desc: "Molho de tomate, mussarela, alho frito e parmesão." },
    ]
  },
  {
    category: "Borda Recheada",
    items: [
      { name: "Requeijão Cremoso" },
      { name: "Cheddar" },
      { name: "Doce de Leite" },
      { name: "Chocolate" },
    ]
  },
  {
    category: "Pizzas Doces",
    items: [
      { name: "Brigadeiro", desc: "Chocolate ao leite e granulado." },
      { name: "Prestigio", desc: "Chocolate ao leite e coco relado." },
      { name: "Bananoca", desc: "Chocolate ao leite e banana." },
      { name: "Bananinha", desc: "Banana, doce de leite, açúcar e canela." },
      { name: "Cartola", desc: "Mussarela, banana, doce de leite e canela." },
      { name: "Romeu e Julieta", desc: "Mussarela e goiabada." },
    ]
  },
  {
    category: "Bebidas",
    items: [
      { name: "Refrigerante 600ML" },
      { name: "Refrigerante 2 LITROS" },
      { name: "Agua SEM GAS 500ML" },
      { name: "Agua COM GAS 500ML" },
    ]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'home' | 'menu'>('home');

  const whatsappNumber = "5511962900705";
  const whatsappMsg = encodeURIComponent("Olá, gostaria de fazer um pedido!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTabChange = (tab: 'home' | 'menu') => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 font-sans selection:bg-pizza-red selection:text-white flex flex-col">
      {/* Header / Navbar */}
      <header className="fixed w-full z-50 bg-dark-surface/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => handleTabChange('home')} className="flex items-center gap-2 text-left">
            <Pizza className="text-pizza-red h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pizza-red to-pizza-orange bg-clip-text text-transparent">
              Do Baixinho
            </span>
          </button>
          
          <nav className="hidden md:flex gap-8 font-medium items-center">
            <button 
              onClick={() => handleTabChange('home')} 
              className={`${activeTab === 'home' ? 'text-white' : 'text-gray-400'} hover:text-pizza-yellow transition-colors`}
            >
              Início
            </button>
            <button 
              onClick={() => handleTabChange('menu')} 
              className={`${activeTab === 'menu' ? 'text-pizza-yellow font-bold' : 'text-gray-400'} hover:text-pizza-yellow transition-colors`}
            >
              Cardápio Completo
            </button>
            <button onClick={() => scrollToSection('promocoes')} className="text-gray-400 hover:text-pizza-yellow transition-colors">Promoções</button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-pizza-yellow transition-colors">Sobre</button>
          </nav>

          <div className="hidden md:block">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              <MessageCircle size={20} />
              Pedir Agora
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-surface border-t border-white/5 absolute w-full left-0 p-4 flex flex-col gap-4 shadow-xl">
            <button onClick={() => handleTabChange('home')} className={`text-left py-2 text-lg font-medium ${activeTab === 'home' ? 'text-pizza-yellow' : 'hover:text-pizza-yellow'}`}>Início</button>
            <button onClick={() => handleTabChange('menu')} className={`text-left py-2 text-lg font-medium ${activeTab === 'menu' ? 'text-pizza-yellow' : 'hover:text-pizza-yellow'}`}>Cardápio Completo</button>
            <button onClick={() => scrollToSection('promocoes')} className="text-left py-2 text-lg font-medium hover:text-pizza-yellow text-gray-300">Promoções</button>
            <button onClick={() => scrollToSection('sobre')} className="text-left py-2 text-lg font-medium hover:text-pizza-yellow text-gray-300">Sobre</button>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-green-500 text-white text-center py-3 rounded-xl font-bold mt-2 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Pedir via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-24">
        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="pt-8 pb-20 md:pt-16 md:pb-32 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pizza-red/20 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="flex flex-col gap-6 text-center md:text-left">
                  <div className="inline-block px-4 py-1.5 bg-pizza-red/10 border border-pizza-red/20 text-pizza-yellow rounded-full w-fit mx-auto md:mx-0 font-medium text-sm">
                    🍕 Massa Artesanal & Ingredientes Premium
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
                    A melhor pizza da região <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pizza-yellow to-pizza-orange">
                      entregue quentinha!
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
                    Sabor inesquecível, borda recheada perfeita e entrega mais rápida que você já viu. Peça agora e se surpreenda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                    <button 
                      onClick={() => handleTabChange('menu')}
                      className="bg-pizza-red hover:bg-pizza-red-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(229,57,53,0.3)] flex items-center justify-center gap-2"
                    >
                      Ver Cardápio
                    </button>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-dark-surface border border-white/10 hover:border-pizza-yellow hover:text-pizza-yellow text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <MessageCircle size={22} className="text-green-500 group-hover:text-green-400" />
                      Pedir no WhatsApp
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-dark-bg flex items-center justify-center text-xs font-bold">A</div>
                      <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-dark-bg flex items-center justify-center text-xs font-bold">M</div>
                      <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-dark-bg flex items-center justify-center text-xs font-bold">J</div>
                    </div>
                    <div className="text-sm">
                      <div className="flex text-pizza-yellow">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                      <span className="text-gray-400">Mais de 2.000 clientes satisfeitos</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mt-8 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10 hidden md:block h-20 bottom-0 mt-auto"></div>
                  <img 
                    src="/hero_pizza.png" 
                    alt="Pizza deliciosa" 
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-0 md:scale-110 md:-right-8 animate-[spin_60s_linear_infinite]"
                    style={{ filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.5))' }}
                  />
                </div>
              </div>
            </section>

            {/* Promos Section */}
            <section id="promocoes" className="py-20 bg-dark-surface relative border-y border-white/5">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Promoções Imperdíveis</h2>
                  <p className="text-pizza-yellow font-medium">Aproveite enquanto durar o estoque!</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Promo 1 */}
                  <div className="bg-gradient-to-br from-pizza-red to-pizza-orange rounded-2xl p-1 shadow-lg transform transition-transform hover:scale-105">
                    <div className="bg-dark-bg rounded-xl p-6 h-full flex flex-col relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-pizza-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">SÓ HOJE</div>
                      <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Combo Casal</h3>
                      <p className="text-gray-300 mb-6 flex-grow relative z-10">1 Pizza Grande (Tradicional) + 1 Refrigerante 2L</p>
                      <div className="flex justify-between items-end relative z-10">
                        <div>
                          <span className="text-sm text-gray-400 line-through">De R$ 85,00</span>
                          <div className="text-3xl font-extrabold text-pizza-yellow">R$ 69,90</div>
                        </div>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-pizza-red hover:bg-gray-100 p-2 rounded-full transition-colors">
                          <ChevronRight size={24} />
                        </a>
                      </div>
                      <Pizza className="absolute -bottom-6 -right-6 h-32 w-32 text-white/5 opacity-50 rotate-12" />
                    </div>
                  </div>

                  {/* Promo 2 */}
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col relative hover:bg-white/15 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">Terça em Dobro</h3>
                    <p className="text-gray-400 mb-6 flex-grow">Na compra de 1 Pizza Grande Especial, a 2ª (Tradicional) sai com 50% OFF!</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-white">50% de Desconto</div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-pizza-red text-white hover:bg-pizza-red-dark px-4 py-2 rounded-lg font-medium transition-colors">
                        Pedir
                      </a>
                    </div>
                  </div>

                  {/* Promo 3 */}
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col relative hover:bg-white/15 transition-colors md:col-span-2 lg:col-span-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Kit Festa</h3>
                    <p className="text-gray-400 mb-6 flex-grow">3 Pizzas Grandes + 2 Refrigerantes 2L. Ideal para dividir com a galera!</p>
                    <div className="flex justify-between items-end">
                      <div className="text-3xl font-extrabold text-pizza-yellow">R$ 159,90</div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-pizza-red text-white hover:bg-pizza-red-dark px-4 py-2 rounded-lg font-medium transition-colors">
                        Pedir
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Menu Highlights Section */}
            <section id="cardapio" className="py-24 relative">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Destaques do Cardápio</h2>
                  <p className="text-gray-400 text-lg">Pizzas com massa de longa fermentação, molho de tomate pelati e ingredientes selecionados a dedo.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {/* Item */}
                  <div className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-pizza-red/50 transition-all hover:shadow-[0_0_20px_rgba(229,57,53,0.15)] flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                      <img src="/menu_margherita.png" alt="Margherita" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-dark-bg/80 backdrop-blur-sm text-pizza-yellow px-3 py-1 rounded-full text-sm font-bold border border-pizza-yellow/30">
                        Mais Vendida
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-white">Margherita</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">Molho de tomate pelati, mozzarella, manjericão fresco e azeite extra virgem.</p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-pizza-red text-white text-center py-3 rounded-xl font-medium transition-colors border border-white/10 hover:border-pizza-red mt-auto">
                        Pedir
                      </a>
                    </div>
                  </div>
                  
                  {/* Item */}
                  <div className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-pizza-red/50 transition-all hover:shadow-[0_0_20px_rgba(229,57,53,0.15)] flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                      <img src="/hero_pizza.png" alt="Calabresa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 scale-125" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-white">Calabresa</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">Molho de tomate pelati, calabresa fatiada, cebola e azeitonas pretas.</p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-pizza-red text-white text-center py-3 rounded-xl font-medium transition-colors border border-white/10 hover:border-pizza-red mt-auto">
                        Pedir
                      </a>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-pizza-red/50 transition-all hover:shadow-[0_0_20px_rgba(229,57,53,0.15)] flex flex-col md:col-span-2 lg:col-span-1">
                    <div className="h-56 overflow-hidden relative">
                      <img src="/menu_sweet.png" alt="Sensação" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-white">Sensação (Doce)</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">Chocolate ao leite derretido, morangos frescos fatiados e fios de leite condensado.</p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-pizza-red text-white text-center py-3 rounded-xl font-medium transition-colors border border-white/10 hover:border-pizza-red mt-auto">
                        Pedir
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={() => handleTabChange('menu')} 
                    className="inline-flex items-center gap-2 bg-pizza-red hover:bg-pizza-red-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(229,57,53,0.3)]"
                  >
                    Ver Cardápio Completo
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="py-20 bg-dark-surface border-y border-white/5 relative overflow-hidden">
              <div className="absolute -left-40 top-20 w-80 h-80 bg-pizza-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem nossos clientes</h2>
                  <div className="flex justify-center gap-1 text-pizza-yellow">
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: "Carlos S.", comment: "Melhor pizza que já comi! A massa é incrivelmente leve e o recheio é muito generoso. Recomendo de olhos fechados." },
                    { name: "Mariana T.", comment: "Entrega super rápida, chegou quentinha, o que é raro hoje em dia. A pizza doce de sensação é maravilhosa!" },
                    { name: "Roberto F.", comment: "Preço justo e qualidade excelente. Virou a pizzaria oficial aqui de casa todo final de semana. Atendimento nota 10 no whats." }
                  ].map((review, i) => (
                    <div key={i} className="bg-dark-bg p-8 rounded-2xl border border-white/5 relative">
                      <div className="text-pizza-yellow mb-4">
                        <Star size={20} fill="currentColor" className="inline mr-1" />
                        <Star size={20} fill="currentColor" className="inline mr-1" />
                        <Star size={20} fill="currentColor" className="inline mr-1" />
                        <Star size={20} fill="currentColor" className="inline mr-1" />
                        <Star size={20} fill="currentColor" className="inline" />
                      </div>
                      <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
                      <div className="font-bold text-white">- {review.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About & Info Section */}
            <section id="sobre" className="py-20">
              <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre a Pizzaria do Baixinho</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Tudo começou com uma paixão por criar momentos felizes ao redor da mesa. A Pizzaria do Baixinho é um negócio local, nascido do desejo de oferecer uma pizza de qualidade superior, com ingredientes frescos e um atendimento que faz você se sentir em casa.
                  </p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Cada pizza é montada com carinho e assada no ponto perfeito para garantir aquela borda crocante e o queijo derretendo. Não somos só uma pizzaria, somos parte do seu momento de lazer.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="bg-pizza-red/20 p-3 rounded-lg text-pizza-red">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Horário de Funcionamento</h4>
                        <p className="text-sm">Terça a Domingo: 18h às 23h30</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="bg-pizza-orange/20 p-3 rounded-lg text-pizza-orange">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Área de Entrega</h4>
                        <p className="text-sm">Entregamos em toda a região. Consulte as taxas de entrega para o seu bairro no WhatsApp.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-tr from-dark-surface to-dark-bg p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Faça seu Pedido</h3>
                    <p className="text-center text-gray-400 mb-8">Nossa equipe está pronta para te atender rapidamente no WhatsApp.</p>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-full bg-[#25D366] hover:bg-[#1ebd57] text-white text-xl py-4 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 hover:-translate-y-1"
                    >
                      <Phone fill="currentColor" size={24} />
                      {whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')}
                    </a>
                    
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                      <p className="text-gray-400 mb-4">Siga-nos nas redes sociais</p>
                      <a href="https://www.instagram.com/apizzariadobaixinho" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white hover:scale-110 transition-transform">
                        <InstagramIcon size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-12 bg-dark-bg min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => handleTabChange('home')}
                  className="p-2 bg-dark-surface hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors border border-white/10"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Cardápio Completo</h2>
              </div>

              <div className="space-y-16">
                {fullMenuData.map((section, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-3xl font-bold text-white">{section.category}</h3>
                      <div className="h-px bg-gradient-to-r from-pizza-red/50 to-transparent flex-grow"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="bg-dark-surface p-5 rounded-xl border border-white/5 hover:border-pizza-yellow/30 transition-colors flex flex-col">
                          <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                          {item.desc && <p className="text-gray-400 text-sm mb-4 flex-grow">{item.desc}</p>}
                          <a 
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, gostaria de pedir: ${item.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto self-start text-pizza-red hover:text-pizza-yellow font-medium flex items-center gap-1 transition-colors"
                          >
                            Pedir Agora <ChevronRight size={16} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center border-t border-white/10 pt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Pronto para pedir?</h3>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:-translate-y-1"
                >
                  <MessageCircle size={28} />
                  Fazer Pedido no WhatsApp
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-white/10 py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Pizza className="text-gray-400 h-6 w-6" />
            <span className="text-xl font-bold text-gray-400">Pizzaria do Baixinho</span>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pizzaria do Baixinho. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        aria-label="Pedir no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-dark-surface text-white text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl">
          Peça agora!
        </span>
      </a>
    </div>
  );
}

export default App;
