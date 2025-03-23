import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-200 via-yellow-100 to-white text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-ping"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mb-6"
        >
          <Image src="/mixuecoin-logo.png" alt="MixueCoin Logo" width={200} height={200} className="mx-auto" />
        </motion.div>
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-red-600 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MixueCoin 🍦
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          La memecoin más fresca y viral del mercado. ¡Inspirada por Mixue, hecha para todos!
        </motion.p>
        <a
          href="#"
          className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-xl transition"
        >
          Compra MixueCoin
        </a>
      </div>
      <section className="bg-white py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">¿Qué es MixueCoin?</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            MixueCoin es una memecoin revolucionaria creada para aprovechar el fenómeno viral de Mixue. Con un enfoque en comunidad, diversión y recompensas, MixueCoin busca posicionarse como una criptomoneda querida por el público.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 bg-yellow-50 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Roadmap</h3>
            <ul className="text-left list-disc list-inside text-gray-700">
              <li>Fase 1: Comunidad y Lanzamiento</li>
              <li>Fase 2: Listado en Exchanges</li>
              <li>Fase 3: Recompensas y Staking</li>
              <li>Fase 4: Marketing Global</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Tokenomics</h3>
            <p>Suministro Máximo: 1.000.000 MIXUE</p>
            <p>Staking: 5% anual</p>
            <p>Airdrops para la Comunidad</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Equipo</h3>
            <p>Desarrollador Principal: Tú</p>
            <p>Marketing: Por definir</p>
            <p>Asociados: Próximamente</p>
          </div>
        </div>
      </section>
      <footer className="bg-red-100 py-6 mt-12 text-center text-sm text-gray-600 relative z-10">
        <p>&copy; 2025 MixueCoin. Sitio oficial en constante evolución 🍦</p>
      </footer>
    </div>
  );
}
