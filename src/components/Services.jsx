import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Wrench,
  DoorOpen,
  Replace,
  ChefHat,
  Tv,
  Droplets,
  Sofa,
  LayoutGrid,
  Blinds,
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

const services = [
  {
    icon: Wrench,
    title: 'Montagem e Desmontagem',
    description: 'Montagem profissional de todos os tipos de móveis com garantia de qualidade.',
  },
  {
    icon: DoorOpen,
    title: 'Reparo de Portas/Gavetas',
    description: 'Conserto especializado de portas e gavetas danificadas ou desalinhadas.',
  },
  {
    icon: Replace,
    title: 'Substituição de Peças',
    description: 'Troca de componentes danificados por peças originais ou compatíveis.',
  },
  {
    icon: ChefHat,
    title: 'Instalação de Cozinha',
    description: 'Montagem completa de cozinhas planejadas com acabamento impecável.',
  },
  {
    icon: Tv,
    title: 'Painel de TV',
    description: 'Instalação segura de painéis e suportes para TV em qualquer ambiente.',
  },
  {
    icon: Droplets,
    title: 'Gabinetes de Pia',
    description: 'Montagem de gabinetes de banheiro e cozinha com ajustes precisos.',
  },
  {
    icon: Sofa,
    title: 'Pés de Estofados',
    description: 'Instalação e troca de pés de sofás, poltronas e estofados em geral.',
  },
  {
    icon: LayoutGrid,
    title: 'Nichos e Prateleiras',
    description: 'Fixação segura de nichos e prateleiras decorativas ou funcionais.',
  },
  {
    icon: Blinds,
    title: 'Cortinas e Persianas',
    description: 'Instalação profissional de cortinas, persianas e blackouts.',
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group glass-card rounded-2xl p-6 sm:p-8 hover:border-[#f39200]/50 transition-all duration-500"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f39200] to-[#e08500] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#f39200]/30 group-hover:shadow-xl group-hover:shadow-[#f39200]/40 transition-shadow"
      >
        <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a2a33]" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#f39200] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 overflow-x-hidden" id="servicos">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2a33] via-[#0f343d] to-[#0a2a33]" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/30 to-transparent" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-[#f39200]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-[#f39200]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
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
            Nossos Serviços
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções <span className="text-gradient">Completas</span> para Você
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de montagem e instalação para atender todas as suas necessidades.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA - Botão padrão com WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-16"
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

export default Services;
