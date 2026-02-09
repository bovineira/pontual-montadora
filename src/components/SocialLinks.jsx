import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

// Ícone TikTok (SVG) na cor da página
const TikTokIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const links = [
  {
    id: 'email',
    name: 'E-mail',
    icon: Mail,
    label: 'pontual.montagem@outlook.com',
    href: 'mailto:pontual.montagem@outlook.com',
    buttonText: 'Enviar e-mail',
    isEmail: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    label: '@pontualmm',
    href: 'https://instagram.com/pontualmm',
    buttonText: 'Seguir',
    isEmail: false,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: TikTokIcon,
    label: '@pontualmm',
    href: 'https://www.tiktok.com/@pontualmm',
    buttonText: 'Ver perfil',
    isEmail: false,
  },
];

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="redes-sociais">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f343d] to-[#0a2a33]" />

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Fale conosco pelas <span className="text-gradient">redes</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Siga-nos e entre em contato pelo canal que preferir.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {links.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.isEmail ? '_self' : '_blank'}
              rel={item.isEmail ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -6 }}
              className="group block"
            >
              <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-[#f39200]/40 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#f39200] to-[#e08500] flex items-center justify-center mb-6 text-[#0a2a33] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f39200]/30">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f39200] transition-colors">
                  {item.name}
                </h3>

                {/* Label (handle ou email) */}
                <p className="text-gray-400 text-sm sm:text-base mb-6 flex-1">
                  {item.label}
                </p>

                {/* Button */}
                <span className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#f39200]/10 border border-[#f39200]/30 text-[#f39200] font-semibold text-sm group-hover:bg-[#f39200] group-hover:text-[#0a2a33] group-hover:border-[#f39200] transition-all duration-300">
                  {item.buttonText}
                  {!item.isEmail && (
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  )}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
