import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a2a33]/95 backdrop-blur-lg shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24 sm:h-28 lg:h-32">
          {/* Logo - tamanho aumentado */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <img
              src="/images/logo-pontual.webp"
              alt="Pontual Montagem de Móveis"
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex btn-shine items-center justify-center space-x-2 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#f39200]/30 whitespace-nowrap"
          >
            <Package className="w-5 h-5 shrink-0" />
            <span>MÓVEIS INDICADOS</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a2a33]/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-shine w-full flex items-center justify-center space-x-2 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#f39200]/30"
              >
                <Package className="w-5 h-5 shrink-0" />
                <span>MÓVEIS INDICADOS</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
