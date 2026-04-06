import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = e => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(5,6,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" onClick={handleNav} style={{
            fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.95rem',
            color: 'var(--blue-400)', textDecoration: 'none', letterSpacing: '0.02em',
          }}>
            <span style={{ color: 'var(--text-faint)' }}>{'<'}</span>
            AM
            <span style={{ color: 'var(--text-faint)' }}>{'/ >'}</span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}
            className="nav-desktop">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={handleNav} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.05em',
                padding: '0.45rem 0.9rem', borderRadius: '8px',
                color: active === href ? 'var(--blue-300)' : 'var(--text-muted)',
                textDecoration: 'none',
                background: active === href ? 'rgba(59,130,246,0.06)' : 'transparent',
                border: active === href ? '1px solid rgba(59,130,246,0.15)' : '1px solid transparent',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => { if (active !== href) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; } }}
                onMouseLeave={e => { if (active !== href) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; } }}
              >
                {label}
              </a>
            ))}
            <a href="/Ashish_Musmade_CV_.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginLeft: '0.5rem', fontSize: '0.7rem', padding: '0.4rem 1.1rem' }}>
              Resume ↗
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(o => !o)}
            className="nav-mobile-btn"
            aria-label="Toggle menu"
            style={{
              background: 'none', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '0.55rem 0.7rem',
              cursor: 'pointer', color: 'var(--blue-400)',
              display: 'none', flexDirection: 'column', gap: '4px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '18px', height: '2px',
                background: 'currentColor', borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: open && i === 0 ? 'translateY(6px) rotate(45deg)'
                  : open && i === 2 ? 'translateY(-6px) rotate(-45deg)'
                    : open && i === 1 ? 'scaleX(0)' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="nav-mobile-menu" style={{
            background: 'rgba(5,6,8,0.98)', backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '1.25rem',
            display: 'flex', flexDirection: 'column', gap: '0.5rem',
            position: 'absolute', top: '100%', left: 0, right: 0
          }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={handleNav} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                padding: '0.75rem 1rem', borderRadius: '8px',
                color: active === href ? 'var(--blue-300)' : 'var(--text-muted)',
                textDecoration: 'none',
                background: active === href ? 'rgba(59,130,246,0.06)' : 'transparent',
                border: '1px solid transparent',
                transition: 'all 0.2s ease',
              }}>
                {label}
              </a>
            ))}
            <a href="/Ashish_Musmade_CV_.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '0.6rem', justifyContent: 'center', padding: '0.75rem' }}>
              Download Resume ↗
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
