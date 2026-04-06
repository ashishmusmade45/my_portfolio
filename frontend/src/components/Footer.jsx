export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
      position: 'relative',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px',
        background: 'linear-gradient(to right, transparent, var(--blue-500), transparent)',
      }} />

      <div className="container">
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center',
          gap: '1.5rem', marginBottom: '2rem',
        }}>
          {/* Logo */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontWeight: 500,
              fontSize: '1rem', color: 'var(--blue-400)', marginBottom: '0.35rem',
            }}>
              <span style={{ color: 'var(--text-muted)' }}>{'<'}</span>AM<span style={{ color: 'var(--text-muted)' }}>{'/ >'}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-faint)' }}>
              Ashish Musmade — Full Stack Developer
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text-faint)', textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '0.04em',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--blue-300)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { label: 'GitHub', icon: '⌥', href: 'https://github.com/ashishmusmade45' },
              { label: 'LinkedIn', icon: '◈', href: 'https://www.linkedin.com/in/ashish-musmade' },
              { label: 'Email', icon: '✉', href: 'ashishmusmade45@gmail.com' },
            ].map(({ label, icon, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--blue-300)';
                  e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)';
                  e.currentTarget.style.background = 'rgba(96,165,250,0.06)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" />

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-faint)' }}>
            © {year} Ashish Musmade. Built with React + Vite.
          </span>
          
        </div>
      </div>
    </footer>
  );
}
