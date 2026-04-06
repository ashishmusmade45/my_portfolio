import { useState } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../data';

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-end' }}>
        <span style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.8rem', 
          color: 'var(--text)',
          fontWeight: 500,
          letterSpacing: '0.02em'
        }}>{name}</span>
        <span style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.72rem', 
          color: color,
          fontWeight: 600,
          opacity: 0.9
        }}>{level}%</span>
      </div>
      <div style={{
        height: '6px', 
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '99px', 
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: `linear-gradient(to right, ${color}, ${color}aa)`,
          borderRadius: '99px',
          boxShadow: `0 0 10px ${color}33`,
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
      </div>
    </div>
  );
}

const TECH_ICONS = [
  { name: 'JavaScript', icon: 'JS', bg: 'rgba(59,130,246,0.1)', color: '#60a5fa' },
  { name: 'React', icon: '⚛', bg: 'rgba(34,211,238,0.08)', color: '#22d3ee' },
  { name: 'Node.js', icon: '◉', bg: 'rgba(6,182,212,0.08)', color: '#06b6d4' },
  { name: 'MongoDB', icon: '🍃', bg: 'rgba(167,139,250,0.08)', color: '#a78bfa' },
  { name: 'Express', icon: '⬡', bg: 'rgba(255,255,255,0.06)', color: '#e2e8f0' },
  { name: 'C++', icon: '⊕', bg: 'rgba(59,130,246,0.08)', color: '#60a5fa' },
  { name: 'Tailwind', icon: '🌊', bg: 'rgba(34,211,238,0.08)', color: '#22d3ee' },
  { name: 'PostgreSQL', icon: '🐘', bg: 'rgba(129,140,248,0.08)', color: '#818cf8' },
  { name: 'Git', icon: '⑂', bg: 'rgba(139,92,246,0.08)', color: '#a78bfa' },
  { name: 'REST APIs', icon: '⟷', bg: 'rgba(6,182,212,0.08)', color: '#06b6d4' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...SKILL_CATEGORIES];
  const filtered = activeCategory === 'All' ? SKILLS : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      {/* Subtle section separator */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px', 
        background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.1), transparent)' 
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Stack</div>
          <h2 className="heading-md" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Technical Expertise
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1rem', 
            maxWidth: '550px', 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            A curated list of technologies I use to architect and build modern digital experiences.
          </p>
        </div>

        {/* Icon cloud */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
          justifyContent: 'center', marginBottom: '4rem',
        }}>
          {TECH_ICONS.map(({ name, icon, bg, color }) => (
            <div key={name} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.45rem 1rem',
              background: bg,
              border: `1px solid ${color}20`,
              borderRadius: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color,
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.borderColor = `${color}44`;
                e.currentTarget.style.background = `${color}15`;
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderColor = `${color}20`;
                e.currentTarget.style.background = bg;
              }}
            >
              <span style={{ fontSize: '0.9rem' }}>{icon}</span>
              {name}
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div style={{ 
          display: 'flex', gap: '0.6rem', justifyContent: 'center', 
          flexWrap: 'wrap', marginBottom: '3rem' 
        }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              padding: '0.35rem 1.1rem', borderRadius: '8px',
              cursor: 'pointer', border: '1px solid transparent',
              background: activeCategory === cat ? 'var(--blue-500)' : 'rgba(255,255,255,0.03)',
              color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
              fontWeight: activeCategory === cat ? 600 : 400,
              transition: 'all 0.25s ease',
              border: activeCategory === cat ? '1px solid var(--blue-400)' : '1px solid var(--border)',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem 4rem' 
        }}>
          {Object.entries(
            filtered.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill);
              return acc;
            }, {})
          ).map(([category, skills]) => (
            <div key={category} style={{ animation: 'fadeUp 0.6s ease both' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--blue-400)', letterSpacing: '0.15em',
                marginBottom: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--blue-500)', opacity: 0.3 }} />
                {category.toUpperCase()}
              </div>
              {skills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
