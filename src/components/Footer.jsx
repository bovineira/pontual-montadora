import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowUp,
  Heart,
} from 'lucide-react';

// Ícone TikTok para o footer
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicos: [
      'Montagem de Móveis',
      'Desmontagem',
      'Reparos',
      'Instalações',
      'Cozinhas Planejadas',
    ],
    empresa: [
      'Sobre Nós',
      'Diferenciais',
      'Trabalhe Conosco',
      'Parceiros',
      'Contato',
    ],
    estados: ['São Paulo', 'Bahia', 'Rio Grande do Norte', 'Tocantins', 'Pará', 'Ceará', 'Alagoas'],
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:pontual.montagem@outlook.com', label: 'E-mail', target: '_self' },
    { icon: Instagram, href: 'https://instagram.com/pontualmm', label: 'Instagram', target: '_blank' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@pontualmm', label: 'TikTok', target: '_blank' },
  ];

  return (
    <footer className="relative bg-[#061c22] overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f39200]/50 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f39200]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#f39200]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo - em destaque para fácil identificação */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              className="inline-flex flex-col mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f39200]/30 transition-colors"
            >
              <img
                src="/images/logo-pontual.webp"
                alt="Pontual Montagem de Móveis"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
              <span className="mt-2 text-xs font-medium text-gray-400 text-center tracking-wide">
                Pontual Montagem de Móveis
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Há mais de 10 anos oferecendo soluções completas em montagem de móveis com qualidade,
              pontualidade e compromisso.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-3 text-gray-400 hover:text-[#f39200] transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </a>
              <a
                href="mailto:pontual.montagem@outlook.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-[#f39200] transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm">pontual.montagem@outlook.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-[#f39200] transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-[#f39200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href="#sobre"
                    className="text-gray-400 hover:text-[#f39200] transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-[#f39200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* States Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Onde Atuamos</h4>
            <ul className="space-y-3">
              {footerLinks.estados.map((estado, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-400 text-sm">
                  <MapPin className="w-3 h-3 text-[#f39200] flex-shrink-0" />
                  <span>{estado}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-2xl p-8 sm:p-10 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Pronto para começar?
            </h3>
            <p className="text-gray-400">Entre em contato e solicite um orçamento.</p>
          </div>
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine inline-flex items-center justify-center gap-4 bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 shadow-2xl shadow-[#f39200]/40 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>FALAR CONOSCO</span>
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Pontual Montagem de Móveis. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 hover:bg-[#f39200] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#0a2a33] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-[#f39200] rounded-xl flex items-center justify-center text-[#0a2a33] shadow-lg shadow-[#f39200]/30"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Made with Love */}
          <p className="text-center text-gray-600 text-xs mt-8 flex items-center justify-center space-x-1">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-[#f39200] fill-current" />
            <span>para conectar pessoas e soluções</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
