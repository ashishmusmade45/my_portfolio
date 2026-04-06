import { EDUCATION } from '../data';

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.15), transparent)' }} />

      <div className="container">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label reveal">Background</div>
          <h2 className="heading-lg reveal" style={{ marginBottom: '3rem' }}>
            Education
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {EDUCATION.map((edu, i) => (
              <div key={edu.id} className="glass reveal" style={{
                padding: '2rem',
                transitionDelay: `${i * 0.1}s`,
                borderLeft: '3px solid transparent',
                borderImage: 'linear-gradient(to bottom, var(--blue-500), var(--cyan-500)) 1',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.3rem',
                    }}>
                      {edu.degree}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--blue-400)', marginBottom: '0.15rem' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-faint)' }}>
                      📍 {edu.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1.3rem',
                      background: 'linear-gradient(135deg, var(--blue-300), var(--cyan-400))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {edu.cgpa || edu.percentage}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)' }}>
                      {edu.duration}
                    </div>
                  </div>
                </div>

                {edu.highlights.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--cyan-400)', flexShrink: 0 }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
