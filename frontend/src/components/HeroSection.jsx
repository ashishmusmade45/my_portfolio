import { useTypewriter } from '../hooks';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'AI & Data Science Student',
];

/* ── Cyber Grid Background ── */
function CyberGrid() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      perspective: '1200px',
      overflow: 'hidden',
      zIndex: 0,
      background: 'radial-gradient(circle at 50% 40%, #0a0e1a 0%, #050608 100%)',
    }}>
      {/* 3D Floor Grid */}
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-50%',
        right: '-50%',
        height: '100%',
        background: `
          linear-gradient(to right, rgba(96,165,250,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(96,165,250,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        transform: 'rotateX(75deg)',
        transformOrigin: 'center center',
        animation: 'gridMove 25s linear infinite',
      }} />
      
      {/* Subtle Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vh',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        filter: 'blur(120px)',
        zIndex: 1,
      }} />

      <style>{`
        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
      `}</style>
    </div>
  );
}

export default function HeroSection() {
  const role = useTypewriter(ROLES, 80, 2200);

  return (
    <section id="hero" style={{
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', 
      overflow: 'hidden',
      padding: '0 1.5rem',
    }}>
      <CyberGrid />

      {/* Content */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        textAlign: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        maxWidth: '900px',
      }}>
        
        {/* Availability Badge */}
        <div style={{
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.6rem',
          padding: '0.35rem 1rem', 
          borderRadius: '99px',
          background: 'rgba(34,211,238,0.06)', 
          border: '1px solid rgba(34,211,238,0.2)',
          marginBottom: '2rem',
          animation: 'fadeDown 0.8s cubic-bezier(0.16,1,0.3,1) both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#22d3ee',
            boxShadow: '0 0 10px #22d3ee',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            letterSpacing: '0.12em', 
            color: '#22d3ee',
            fontWeight: 500 
          }}>
            OPEN TO NEW OPPORTUNITIES & FRESHER ROLES
          </span>
        </div>

        {/* Large Centered Title */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
            color: 'var(--text-faint)', marginBottom: '0.75rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both',
          }}>
            <span style={{ color: 'var(--blue-500)' }}>{'<'}</span>
            Hello, Environment! I'm
            <span style={{ color: 'var(--blue-500)' }}>{' />'}</span>
          </div>
          
          <h1 className="heading-xl" style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s both',
            margin: '0 auto',
            maxWidth: 'fit-content',
            fontWeight: 800
          }}>
            <span className="grad-amber">Ashish</span>{' '}
            <span style={{ color: 'var(--text)' }}>Musmade</span>
          </h1>
        </div>

        {/* Dynamic Role */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          padding: '0.5rem 1.2rem', borderRadius: '12px',
          background: 'rgba(59,130,246,0.04)', 
          border: '1px solid rgba(59,130,246,0.12)',
          backdropFilter: 'blur(8px)',
          marginBottom: '2rem',
          animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue-400)', fontSize: '1rem' }}>λ</span>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
            color: 'var(--text)',
            fontWeight: 500
          }}>
            {role}
          </span>
          <span style={{
            display: 'inline-block', width: '2px', height: '1.1em',
            background: 'var(--blue-400)', verticalAlign: 'middle',
            boxShadow: '0 0 8px var(--blue-400)',
            animation: 'blink 1.2s step-end infinite',
          }} />
        </div>

        {/* Bio */}
        <p style={{
          fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
          color: 'var(--text-muted)', 
          lineHeight: 1.7,
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both',
        }}>
          Final-year <span style={{ color: 'var(--blue-300)', fontWeight: 600 }}>AI & Data Science</span> student 
          specializing in <span style={{ color: 'var(--cyan-300)', fontWeight: 600 }}>Full-Stack Engineering</span>. 
          I build intelligent web systems that solve complex problems with elegant code.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1s both',
        }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.88rem' }}>
            Explore Projects ↓
          </a>
          <a href="/Ashish_Musmade_CV_.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '0.88rem' }}>
            Get Resume ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        animation: 'fadeUp 1s ease 1.8s both',
        zIndex: 10,
      }}>
        <div style={{
          width: '22px', height: '36px',
          border: '1.5px solid rgba(96,165,250,0.15)',
          borderRadius: '11px',
          display: 'flex', justifyContent: 'center',
          paddingTop: '5px',
        }}>
          <div style={{
            width: '3px', height: '7px',
            background: 'var(--blue-400)',
            borderRadius: '99px',
            boxShadow: '0 0 6px var(--blue-400)',
            animation: 'scrollDot 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}
