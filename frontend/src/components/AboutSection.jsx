export default function AboutSection() {
  const stats = [
    { value: '4+', label: 'Projects Shipped' },
    { value: '10+', label: 'Technologies' },
    { value: '2026', label: 'Graduating' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div>
            <div className="section-label reveal">About Me</div>
            <h2 className="heading-lg reveal" style={{ marginBottom: '1.5rem' }}>
              Building at the intersection of{' '}
              <span className="grad-amber">Web</span> &{' '}
              <span className="grad-teal">AI</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85 }}>
                I'm Ashish — a final-year B.E. student in <span style={{ color: 'var(--blue-300)' }}>Artificial Intelligence & Data Science</span> at
                DY Patil College of Engineering, Akurdi, Pune. I build full-stack web applications
                and have a deep interest in integrating AI capabilities into real-world products.
              </p>
              <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85 }}>
                My go-to stack is the <span style={{ color: 'var(--cyan-300)' }}>MERN stack</span> — I enjoy architecting
                REST APIs, designing clean React UIs, and optimizing database queries.
                Beyond the MERN stack, I've explored Python backends, post-quantum cryptography,
                and AI-powered tooling using LLM APIs.
              </p>
              <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85 }}>
                When I'm not building, I'm solving DSA problems in C++, contributing to open source,
                or reading about emerging tech. I'm actively seeking <span style={{ color: 'var(--amber-300)' }}>internship and fresher opportunities</span> where
                I can contribute meaningfully from day one.
              </p>
            </div>

            <div className="reveal" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              {['Full Stack', 'MERN Stack', 'REST APIs', 'AI Tools', 'Problem Solving'].map(tag => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            <div className="reveal" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/ashishmusmade45" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.78rem' }}>
                GitHub Profile ↗
              </a>
              <a href="https://www.linkedin.com/in/ashish-musmade" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ padding: '0.65rem 1.4rem' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Stats + Info card */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} className="glass" style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'border-color 0.3s ease',
                  animation: 'borderGlow 4s ease-in-out infinite',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hi)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '2.2rem', lineHeight: 1,
                    marginBottom: '0.4rem',
                    background: 'linear-gradient(135deg, var(--blue-300), var(--blue-500))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="glass" style={{ padding: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--blue-400)', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                // QUICK INFO
              </div>
              {[
                { icon: '🏫', label: 'College', value: 'DY Patil Engineering, Akurdi' },
                { icon: '📚', label: 'Branch', value: 'AI & Data Science' },
                { icon: '📍', label: 'Location', value: 'Pune, Maharashtra' },
                { icon: '🎓', label: 'Batch', value: '2022 – 2026' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{
                  display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <span style={{ fontSize: '0.9rem', marginTop: '1px' }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)', letterSpacing: '0.06em', marginBottom: '0.1rem' }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
