import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('success');
    setTimeout(() => setStatus(null), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
  };

  const handleFocus = e => {
    e.target.style.borderColor = 'rgba(96,165,250,0.4)';
    e.target.style.boxShadow = '0 0 0 3px rgba(96,165,250,0.06)';
  };
  const handleBlur = e => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.15), transparent)' }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <div className="section-label reveal">Contact</div>
            <h2 className="heading-lg reveal" style={{ marginBottom: '1.25rem' }}>
              Let's <span className="grad-amber">Connect</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              I'm actively looking for new roles and fresher opportunities. Whether you have a position in mind,
              a project idea, or just want to chat — my inbox is always open.
            </p>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '✉', label: 'Email', value: 'ashishmusmade45@gmail.com', href: 'mailto:ashishmusmade45@gmail.com' },
                { icon: '⌥', label: 'GitHub', value: 'github.com/ashishmusmade45', href: 'https://github.com/ashishmusmade45' },
                { icon: '◈', label: 'LinkedIn', value: 'linkedin.com/in/ashish-musmade', href: 'https://www.linkedin.com/in/ashish-musmade' },
                { icon: '📍', label: 'Location', value: 'Pune, Maharashtra, India', href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="glass" style={{
                  padding: '1rem 1.25rem',
                  display: 'flex', gap: '1rem', alignItems: 'center',
                  transition: 'border-color 0.25s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-mid)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(96,165,250,0.08)',
                    border: '1px solid rgba(96,165,250,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-faint)', letterSpacing: '0.08em', marginBottom: '0.1rem' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{
                        fontSize: '0.85rem', color: 'var(--blue-300)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--blue-200)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--blue-300)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass reveal-right" style={{ padding: '2rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--blue-400)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              // SEND A MESSAGE
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>NAME</label>
                <input
                  type="text" required placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>EMAIL</label>
                <input
                  type="email" required placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>MESSAGE</label>
                <textarea
                  required rows={5} placeholder="Hi Ashish, I'd like to connect about..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {status === 'success' && (
                <div style={{
                  padding: '0.75rem 1rem', borderRadius: '8px',
                  background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
                  color: '#22d3ee', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  ✓ Message received! I'll get back to you soon.
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
