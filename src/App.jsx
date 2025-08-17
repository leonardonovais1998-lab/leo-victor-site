import './App.css'
import { useState } from 'react'
import { Instagram, Youtube, Facebook, Phone, Mail, Calendar, Music, Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'

// Importando as imagens
import heroImage from './assets/1000000624.jpg'
import studioImage from './assets/1000000442.jpg'
import performanceImage from './assets/22f60d3b-63da-413d-a03a-8e6e1963c5bd-1_all_1.png'
import micImage from './assets/1000001078.jpg'
import portraitImage from './assets/1000001021.webp'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Léo Victor
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'historia', 'agenda', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-yellow-400 transition-colors capitalize ${
                    activeSection === section ? 'text-yellow-400' : ''
                  }`}
                >
                  {section === 'historia' ? 'Minha História' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Léo Victor" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            LÉO VICTOR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-yellow-400"
          >
            Cantor e Compositor Gospel
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Levando edificação, esperança, avivamento e renovação através da adoração
          </motion.p>
          
          {/* Video Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
          >
            <a 
              href="https://youtu.be/BjyoBVd6IQI?si=JQdmo3jwu_SEDrkj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Youtube className="mr-3" size={24} />
              Assista ao Vídeo
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <a 
              href="https://www.instagram.com/leovictor_oficial?igsh=bGdvYnptZDE4Yjl0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors transform hover:scale-110"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://youtube.com/@leonardovictoroficial?si=fXf872-YjevNChUa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors transform hover:scale-110"
            >
              <Youtube size={32} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Minha História Section */}
      <section id="historia" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Minha História
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Em cada nota e em cada palavra que canto, trago a melodia de uma vida transformada. 
                  Meu nome é Léo Victor, e minha jornada é um testemunho vivo do poder restaurador de Deus. 
                  Houve um tempo em que me via aprisionado por vícios, mergulhado na depressão, nas drogas, 
                  na prostituição e na incredulidade. A escuridão parecia ser o meu único horizonte.
                </p>
                <p>
                  Mesmo tendo conhecido a presença de Deus em minha vida por anos, em um dado momento, me desviei. 
                  A distância da fé me levou por caminhos tortuosos, onde a dor e a perda se tornaram companheiras constantes. 
                  Cheguei ao fundo do poço, à beira da morte, e perdi tudo o que considerava importante. 
                  Foi nesse abismo que, finalmente, ouvi novamente o chamado de Deus, um chamado que ecoava em meu coração há muito tempo.
                </p>
                <p>
                  Hoje, sou uma nova criatura. Cada passo que dou, cada canção que componho, é um hino de gratidão ao Senhor que me resgatou. 
                  Minha história não é de perfeição, mas de redenção. É a prova de que, não importa o quão longe alguém possa ter se desviado, 
                  a graça e o amor de Deus são capazes de transformar vidas, oferecendo uma nova chance, uma nova esperança, e um propósito renovado. 
                  Que minha voz seja um instrumento para levar edificação, esperança, avivamento e renovação a todos que me ouvem, 
                  sempre com o coração grato ao Pai.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src={studioImage} 
                alt="Léo Victor no estúdio" 
                className="rounded-lg shadow-2xl"
              />
              <img 
                src={micImage} 
                alt="Léo Victor cantando" 
                className="rounded-lg shadow-2xl mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-gradient-to-r from-purple-900 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Agenda
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-yellow-400" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">20/08/2025</h3>
                      <p className="text-gray-300">Culto - São Paulo</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Próximo
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-yellow-400" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">03/08/2025</h3>
                      <p className="text-gray-300">Culto - São Paulo</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-slate-900 to-black">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Contato
          </motion.h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <Phone className="text-yellow-400" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5511913503358" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    (11) 91350-3358
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="text-yellow-400" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white">E-mail</h3>
                  <a 
                    href="mailto:leonardo.novais.1998@gmail.com"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    leonardo.novais.1998@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Redes Sociais</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.instagram.com/leovictor_oficial?igsh=bGdvYnptZDE4Yjl0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition-colors transform hover:scale-110"
                  >
                    <Instagram size={32} />
                  </a>
                  <a 
                    href="https://youtube.com/@leonardovictoroficial?si=fXf872-YjevNChUa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors transform hover:scale-110"
                  >
                    <Youtube size={32} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src={portraitImage} 
                alt="Léo Victor" 
                className="rounded-lg shadow-2xl max-w-sm w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Léo Victor. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 mt-2">
            Levando edificação, esperança, avivamento e renovação através da adoração
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
