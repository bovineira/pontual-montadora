import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    number: 10,
    suffix: '+',
    label: 'Anos de Mercado',
    description: 'Experiência consolidada',
  },
  {
    icon: Users,
    number: 300,
    suffix: '+',
    label: 'Colaboradores',
    description: 'Profissionais qualificados',
  },
  {
    icon: MapPin,
    number: 7,
    suffix: '',
    label: 'Estados Atendidos',
    description: 'SP, BA, RN, TO, PA, CE, AL',
  },
  {
    icon: Clock,
    number: 99,
    suffix: '%',
    label: 'Pontualidade',
    description: 'Compromisso com prazos',
  },
];

const CountUpNumber = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.round(stepValue * currentStep));
      } else {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ stat, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group"
    >
      <div className="glass-card rounded-2xl p-8 sm:p-10 text-center hover:border-[#f39200]/50 transition-all duration-500">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#f39200] to-[#e08500] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#f39200]/30 group-hover:shadow-2xl group-hover:shadow-[#f39200]/40 transition-all"
        >
          <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0a2a33]" />
        </motion.div>

        {/* Number */}
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
          <CountUpNumber target={stat.number} suffix={stat.suffix} isInView={isInView} />
        </h3>

        {/* Label */}
        <p className="text-xl sm:text-2xl font-semibold text-[#f39200] mb-2">{stat.label}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base">{stat.description}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="diferenciais">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a33]/95 via-[#0f343d]/90 to-[#0a2a33]/95" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
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
            Nossos Diferenciais
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Experiência que <span className="text-gradient">Faz a Diferença</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Números que comprovam nossa dedicação e excelência no mercado de montagem de móveis.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
