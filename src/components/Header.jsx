import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package } from 'lucide-react';

// Ícone do WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const MOVEIS_INDICADOS_WHATSAPP = 'https://wa.me/5571983894091?text=Ol%C3%A1%2C%20quero%20saber%20quais%20s%C3%A3o%20os%20m%C3%B3veis%20indicados%20por%20voc%C3%AAs%20da%20Pontual';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoveisModalOpen, setIsMoveisModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMoveisModal = () => {
    setIsMobileMenuOpen(false);
    setIsMoveisModalOpen(true);
  };

  return (
    <>
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
            {/* Logo */}
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

            {/* Desktop CTA - abre modal */}
            <motion.button
              onClick={openMoveisModal}
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
                  onClick={openMoveisModal}
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

      {/* Modal Móveis Indicados */}
      <AnimatePresence>
        {isMoveisModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setIsMoveisModalOpen(false)}
              aria-hidden="true"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100%-2rem)] max-w-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="moveis-modal-title"
            >
              <div className="relative glass-card rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl">
                {/* Botão fechar */}
                <button
                  onClick={() => setIsMoveisModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Ícone */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f39200] to-[#e08500] flex items-center justify-center">
                  <Package className="w-8 h-8 text-[#0a2a33]" />
                </div>

                {/* Headline */}
                <h2
                  id="moveis-modal-title"
                  className="text-xl sm:text-2xl font-bold text-white text-center mb-6 leading-tight"
                >
                  Saiba quais são nossos móveis indicados clicando abaixo
                </h2>

                {/* CTA WhatsApp */}
                <motion.a
                  href={MOVEIS_INDICADOS_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-shine w-full flex items-center justify-center gap-3 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg shadow-[#f39200]/40 transition-colors"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>Quero saber os móveis indicados</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
