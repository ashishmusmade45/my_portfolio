import { EXPERIENCES } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(45,212,191,0.15), transparent)' }} />

      <div className="container">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-label reveal">Career</div>
          <h2 className="heading-lg reveal" style={{ marginBottom: '3rem' }}>
            Experience
          </h2>

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="reveal" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              {/* Timeline line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
                <div style={{
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: 'var(--amber-500)', flexShrink: 0,
                  boxShadow: '0 0 12px rgba(251,191,36,0.5)',
                }} />
                <div style={{ flex: 1, width: '1px', background: 'linear-gradient(to bottom, rgba(251,191,36,0.3), transparent)', marginTop: '4px' }} />
              </div>

              {/* Content */}
              <div className="glass" style={{ flex: 1, padding: '1.75rem', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--amber-400)' }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="chip" style={{ marginBottom: '0.35rem', display: 'inline-block' }}>{exp.type}</span>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                      {exp.startDate} – {exp.endDate}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)' }}>
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {exp.achievements.map((a, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--teal-400)', flexShrink: 0, marginTop: '2px' }}>▸</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {exp.tech.map(t => (
                    <span key={t} className="chip chip-teal" style={{ fontSize: '0.6rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "More coming soon" card */}
          <div className="reveal" style={{
            display: 'flex', gap: '2rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
              <div style={{
                width: '14px', height: '14px', borderRadius: '50%',
                border: '2px dashed rgba(251,191,36,0.4)', flexShrink: 0,
              }} />
            </div>
            <div className="glass" style={{
              flex: 1, padding: '1.5rem',
              background: 'rgba(251,191,36,0.03)',
              border: '1px dashed rgba(251,191,36,0.2)',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔍</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--amber-300)', marginBottom: '0.2rem' }}>
                  Open to New Opportunities
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Internships · Full-time · Contract roles in Full Stack & AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
