import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTATO_EMAIL = 'pontual.montagem@outlook.com';

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({ nome: '', cidade: '', telefone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Quero trabalhar como montador - Pontual');
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nCidade: ${formData.cidade}\nTelefone (WhatsApp): ${formData.telefone}`
    );
    window.location.href = `mailto:${CONTATO_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
        Você é um montador e quer trabalhar conosco? Preencha as informações abaixo
      </h2>
      <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-xl mx-auto border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="trabalhe-nome" className="block text-sm font-medium text-gray-300 mb-2">
              Nome
            </label>
            <input
              id="trabalhe-nome"
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-[#f39200] focus:ring-2 focus:ring-[#f39200]/30 outline-none transition-all"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="trabalhe-cidade" className="block text-sm font-medium text-gray-300 mb-2">
              Cidade
            </label>
            <input
              id="trabalhe-cidade"
              type="text"
              required
              value={formData.cidade}
              onChange={(e) => setFormData((p) => ({ ...p, cidade: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-[#f39200] focus:ring-2 focus:ring-[#f39200]/30 outline-none transition-all"
              placeholder="Sua cidade"
            />
          </div>
          <div>
            <label htmlFor="trabalhe-telefone" className="block text-sm font-medium text-gray-300 mb-2">
              Número de telefone (WhatsApp)
            </label>
            <input
              id="trabalhe-telefone"
              type="tel"
              required
              value={formData.telefone}
              onChange={(e) => setFormData((p) => ({ ...p, telefone: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-[#f39200] focus:ring-2 focus:ring-[#f39200]/30 outline-none transition-all"
              placeholder="(00) 00000-0000"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine w-full py-4 px-6 rounded-xl bg-[#f39200] hover:bg-[#e08500] text-[#0a2a33] font-bold text-base sm:text-lg shadow-lg shadow-[#f39200]/30 transition-colors"
          >
            Enviar
          </motion.button>
        </form>
      </div>
      <p className="text-center text-gray-400 text-sm sm:text-base mt-4">
        Nós te chamaremos no seu WhatsApp.
      </p>
    </section>
  );
};

export default TrabalheConosco;
