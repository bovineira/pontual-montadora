import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Ícone do WhatsApp customizado
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const marketplaces = [
  {
    name: 'Amazon',
    color: '#FF9900',
    bgGradient: 'from-[#FF9900]/20 to-[#FFB84D]/10',
    logo: '/images/marketplaces/amazon.webp',
  },
  {
    name: 'Mercado Livre',
    color: '#FFE600',
    bgGradient: 'from-[#FFE600]/20 to-[#FFF566]/10',
    logo: '/images/marketplaces/mercado-livre.webp',
  },
  {
    name: 'Casas Bahia',
    color: '#FF6B00',
    bgGradient: 'from-[#FF6B00]/20 to-[#FF8A33]/10',
    logo: '/images/marketplaces/casas-bahia.webp',
  },
  {
    name: 'Magazine Luiza',
    color: '#FF0092',
    bgGradient: 'from-[#FF0092]/20 to-[#FF33AA]/10',
    logo: '/images/marketplaces/magazine-luiza.webp',
  },
  {
    name: 'Shopee',
    color: '#EE4D2D',
    bgGradient: 'from-[#EE4D2D]/20 to-[#FF6B4D]/10',
    logo: '/images/marketplaces/shopee.webp',
  },
  {
    name: 'AliExpress',
    color: '#FF6A00',
    bgGradient: 'from-[#FF6A00]/20 to-[#FF8A33]/10',
    logo: '/images/marketplaces/aliexpress.webp',
  },
];

const Marketplaces = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [logoErrors, setLogoErrors] = useState({});

  // Auto-play carrossel
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % marketplaces.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % marketplaces.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + marketplaces.length) % marketplaces.length);
    setIsAutoPlaying(false);
  };

  const handleLogoError = (name) => {
    setLogoErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="marketplaces">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a33] to-[#0f343d]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-[#f39200]/10 border border-[#f39200]/30 rounded-full text-[#f39200] text-sm font-medium mb-6"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Onde você comprou</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight px-2">
            Atendemos compras feitas nos principais{' '}
            <span className="text-gradient">marketplaces</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Não importa onde você comprou seu móvel, nós montamos para você!
          </p>
        </motion.div>

        {/* Carrossel Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/20 hover:border-[#f39200]/50 flex items-center justify-center text-white hover:text-[#f39200] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f39200]/30 group backdrop-blur-xl"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/20 hover:border-[#f39200]/50 flex items-center justify-center text-white hover:text-[#f39200] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f39200]/30 group backdrop-blur-xl"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Carrossel */}
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {marketplaces.map((marketplace, index) => (
                <div
                  key={index}
                  className="min-w-full px-4 sm:px-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-[#f39200]/40 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Background Glow com cor do marketplace */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${marketplace.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      {/* Logo Container - Logo ou texto estilizado */}
                      <div className="mb-6 w-full h-32 sm:h-40 flex items-center justify-center bg-white/5 rounded-2xl p-6 sm:p-8 group-hover:bg-white/10 transition-all duration-300">
                        {!logoErrors[marketplace.name] && marketplace.logo ? (
                          <img
                            src={marketplace.logo}
                            alt={marketplace.name}
                            className="max-h-24 sm:max-h-32 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            onError={() => handleLogoError(marketplace.name)}
                          />
                        ) : (
                          <h3
                            className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300"
                            style={{
                              color: marketplace.color,
                              textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {marketplace.name}
                          </h3>
                        )}
                      </div>

                      {/* Marketplace Info */}
                      <div className="space-y-2">
                        <p className="text-gray-300 text-base sm:text-lg font-medium">
                          Comprou aqui?
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Nós montamos para você!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {marketplaces.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#f39200] w-8 shadow-lg shadow-[#f39200]/50'
                    : 'bg-white/20 hover:bg-white/40 w-2'
                }`}
                aria-label={`Ir para ${marketplaces[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine inline-flex items-center justify-center gap-4 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-6 rounded-2xl transition-all duration-300 shadow-2xl shadow-[#f39200]/40"
          >
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <span>FALAR CONOSCO</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketplaces;
