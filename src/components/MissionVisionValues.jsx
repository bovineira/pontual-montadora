import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Oferecer soluções completas em montagem de móveis, conectando varejistas a montadores qualificados, garantindo qualidade, pontualidade e a melhor experiência para todos os envolvidos.',
    gradient: 'from-[#f39200] to-[#ffa726]',
  },
  {
    icon: Eye,
    title: 'Visão',
    description:
      'Ser referência nacional em serviços de montagem de móveis, reconhecida pela excelência operacional, inovação tecnológica e pelo impacto positivo na vida de nossos parceiros e colaboradores.',
    gradient: 'from-[#ffa726] to-[#f39200]',
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Pontualidade, Qualidade, Respeito, Transparência, Compromisso com o cliente, Valorização dos colaboradores e Melhoria contínua são os pilares que sustentam nossa atuação diária.',
    gradient: 'from-[#f39200] to-[#e08500]',
  },
];

const MissionCard = ({ item, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -10 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f39200]/30 to-[#ffa726]/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

      {/* Card */}
      <div className="relative glass-card rounded-3xl p-8 sm:p-10 h-full border border-white/10 group-hover:border-[#f39200]/40 transition-all duration-500 overflow-hidden">
        {/* Background Glow */}
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`} />

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#f39200]/30 group-hover:shadow-2xl group-hover:shadow-[#f39200]/40 transition-all`}
        >
          <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0a2a33]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#f39200] transition-colors">
          {item.title}
        </h3>

        {/* Decorative Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-[#f39200] to-[#ffa726] rounded-full mb-6 group-hover:w-24 transition-all duration-500" />

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          {item.description}
        </p>

        {/* Corner Decoration */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
          <item.icon className="w-full h-full text-[#f39200]" />
        </div>
      </div>
    </motion.div>
  );
};

const MissionVisionValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="sobre">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a33] via-[#0f343d] to-[#0a2a33]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-64 h-64 bg-[#f39200]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#f39200]/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#f39200]/10 border border-[#f39200]/30 rounded-full text-[#f39200] text-sm font-medium mb-6"
          >
            Quem Somos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-gradient">Essência</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Conheça os pilares que fundamentam nossa atuação e nos tornam referência no mercado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {items.map((item, index) => (
            <MissionCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
