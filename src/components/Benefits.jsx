import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Store,
  HardHat,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Headphones,
  Star,
  Briefcase,
  Users,
  Award,
} from 'lucide-react';

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

const varejistaBenefits = [
  { icon: Clock, text: 'Agendamento flexível e pontual' },
  { icon: Shield, text: 'Garantia em todos os serviços' },
  { icon: TrendingUp, text: 'Redução de reclamações de clientes' },
  { icon: Headphones, text: 'Suporte dedicado 24/7' },
  { icon: DollarSign, text: 'Preços competitivos' },
  { icon: Star, text: 'Montadores certificados' },
];

const montadorBenefits = [
  { icon: Briefcase, text: 'Fluxo constante de trabalho' },
  { icon: DollarSign, text: 'Pagamento garantido e pontual' },
  { icon: Users, text: 'Capacitação e treinamentos' },
  { icon: Award, text: 'Reconhecimento e bonificações' },
  { icon: Shield, text: 'Suporte técnico especializado' },
  { icon: TrendingUp, text: 'Crescimento profissional' },
];

const BenefitItem = ({ benefit, index, isInView, side }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === 'left' ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center space-x-4 group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f39200]/10 rounded-xl flex items-center justify-center group-hover:bg-[#f39200]/20 transition-colors flex-shrink-0">
        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f39200]" />
      </div>
      <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors">
        {benefit.text}
      </span>
    </motion.div>
  );
};

const BenefitCard = ({ title, icon: Icon, benefits, isInView, side, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f39200]/20 to-[#ffa726]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

      {/* Card */}
      <div className="relative glass-card rounded-3xl p-8 sm:p-10 h-full border border-white/10 group-hover:border-[#f39200]/30 transition-all duration-500">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f39200] to-[#e08500] rounded-2xl flex items-center justify-center shadow-xl shadow-[#f39200]/30 flex-shrink-0"
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a2a33]" />
          </motion.div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#f39200] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm">Benefícios exclusivos</p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              benefit={benefit}
              index={index}
              isInView={isInView}
              side={side}
            />
          ))}
        </div>

        {/* CTA - Botão padrão com WhatsApp */}
        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="btn-shine w-full flex items-center justify-center gap-3 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#f39200]/30"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>FALAR CONOSCO</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="beneficios">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a33] via-[#0f343d] to-[#0a2a33]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />

      {/* Center Divider Glow */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-[#f39200]/30 to-transparent" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-10 w-72 h-72 bg-[#f39200]/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-10 w-80 h-80 bg-[#f39200]/5 rounded-full blur-3xl pointer-events-none"
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
            Vantagens Exclusivas
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Benefícios para <span className="text-gradient">Todos</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Uma parceria que gera valor para varejistas e montadores, criando um ecossistema de sucesso.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <BenefitCard
            title="Para Varejistas"
            icon={Store}
            benefits={varejistaBenefits}
            isInView={isInView}
            side="left"
            delay={0.2}
          />
          <BenefitCard
            title="Para Montadores"
            icon={HardHat}
            benefits={montadorBenefits}
            isInView={isInView}
            side="right"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
