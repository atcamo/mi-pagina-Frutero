import { motion } from 'framer-motion';
import { Github, Twitter, Send, Globe, Cpu, Zap, Shield } from 'lucide-react';

const App = () => {
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={24} />, url: 'https://x.com/atcamo_', color: '#1DA1F2' },
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/atcamo', color: '#f0f6fc' },
    { name: 'Telegram', icon: <Send size={24} />, url: 'https://t.me/Atilioacm', color: '#0088cc' },
  ];

  const web3Reasons = [
    {
      title: 'Descentralización',
      desc: 'Creo en un internet donde el poder reside en los usuarios, no en las corporaciones.',
      icon: <Globe className="text-blue-400" />
    },
    {
      title: 'Inovación',
      desc: 'Smart contracts y DeFi están redefiniendo cómo interactuamos con el valor digital.',
      icon: <Cpu className="text-purple-400" />
    },
    {
      title: 'Soberanía Digital',
      desc: 'La capacidad de poseer realmente tus datos y activos digitales es el futuro.',
      icon: <Shield className="text-indigo-400" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="App">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav className="glass-nav">
        <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
          A<span className="gradient-text">tilio</span>
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Sobre mí</a>
          <a href="#web3" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Web3</a>
          <a href="#connect" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Contacto</a>
        </div>
      </nav>

      <section id="hero" className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
            }}
          >
            🍎
          </motion.div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Hola, soy <br />
            <span className="gradient-text">Atilio Andres Calderón Morales</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Explorador del ecosistema digital, apasionado por las nuevas tecnologías y creador de experiencias modernas.
          </p>
          <motion.div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#web3" className="glass-card" style={{ padding: '0.8rem 2rem', fontWeight: 600 }}>
              Mi visión Web3
            </a>
            <a href="#connect" style={{
              padding: '0.8rem 2rem',
              background: 'var(--accent-primary)',
              borderRadius: '100px',
              fontWeight: 600,
              boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)'
            }}>
              Conectar
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Un poco <span className="gradient-text">sobre mí</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Soy un desarrollador curioso que siempre está buscando la próxima frontera tecnológica. Me encanta construir proyectos que no solo funcionen bien, sino que también se vean increíbles.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Cuando no estoy codeando, probablemente me encuentres explorando nuevas dApps o aprendiendo sobre la infraestructura que impulsará el internet del futuro.
            </p>
          </motion.div>
          <motion.div
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Zap size={48} className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Mentalidad de Constructor</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              "La mejor manera de predecir el futuro es implementándolo."
            </p>
          </motion.div>
        </div>
      </section>

      <section id="web3" className="container" style={{ background: 'rgba(99, 102, 241, 0.03)', borderRadius: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Por qué <span className="gradient-text">Web3</span>?</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Mi motivación para sumergirme en el futuro descentralizado.</p>
        </div>

        <motion.div
          className="grid-reasons"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {web3Reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{reason.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="connect" className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Sigamos la <span className="gradient-text">conversación</span></h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '1.5rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '1.1rem',
                fontWeight: 600
              }}
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: link.color + '88'
              }}
            >
              <span style={{ color: link.color }}>{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Atilio Calderón — Hecho con ✨ y React
        </p>
      </footer>

      <style>{`
        .text-blue-400 { color: #60a5fa; }
        .text-purple-400 { color: #c084fc; }
        .text-indigo-400 { color: #818cf8; }
        
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 640px) {
          .glass-nav div {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default App;
