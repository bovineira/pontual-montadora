import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';

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

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const headlineWords = ['Montagem', 'de', 'Móveis', 'com', 'Precisão', 'e', 'Pontualidade.'];
  const highlightWords = ['Precisão', 'Pontualidade.'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a33]/95 via-[#0f343d]/90 to-[#0a2a33]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a33] via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#f39200]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f39200]/5 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-40"
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline - centralizada */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 sm:mb-12 leading-tight max-w-5xl"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={highlightWords.includes(word) ? 'text-gradient' : 'text-white'}
              >
                {word}{i < headlineWords.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-14 sm:mb-16 leading-relaxed"
          >
            Há <span className="text-[#f39200] font-semibold">10 anos</span> sendo a principal referência nacional em soluções de montagem, com{' '}
            <span className="text-[#f39200] font-semibold">99% de pontualidade</span> e presença em{' '}
            <span className="text-[#f39200] font-semibold">7 estados</span>.
          </motion.p>

          {/* Video Container */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-4xl mb-14 sm:mb-16"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f343d] to-[#0a2a33] flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-[#f39200] rounded-full flex items-center justify-center shadow-2xl shadow-[#f39200]/40 group"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#0a2a33] ml-1 group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a33]/50 to-transparent pointer-events-none" />
              {/* Video Label */}
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
                <p className="text-sm text-white/80">Vídeo Institucional</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button com WhatsApp */}
          <motion.div variants={itemVariants}>
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

        {/* Scroll Indicator - centralizado na tela */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-400">Role para descobrir</span>
            <ArrowDown className="w-5 h-5 text-[#f39200]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
