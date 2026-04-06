import { useState } from 'react';
import { PROJECTS } from '../data';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="glass project-card reveal"
      style={{
        padding: '1.75rem',
        animationDelay: `${index * 0.08}s`,
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span className="chip" style={{ fontSize: '0.6rem' }}>{project.category}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: 'var(--text-faint)',
            }}>
              {project.year}
            </span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.15rem', color: 'var(--text)',
          }}>
            {project.title}
          </h3>
        </div>
        {/* Accent bar */}
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px',
          background: `${project.color}18`,
          border: `1px solid ${project.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: project.color }} />
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1rem' }}>
        {expanded ? project.longDesc : project.description}
      </p>

      {/* Highlights */}
      {expanded && (
        <ul style={{ marginBottom: '1rem', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {project.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ color: project.color, flexShrink: 0, marginTop: '2px' }}>▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech chips */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {project.techStack.map(tech => (
          <span key={tech} className="chip" style={{ fontSize: '0.6rem' }}>{tech}</span>
        ))}
      </div>

      <div className="divider" style={{ margin: '1rem 0' }} />

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline" style={{ fontSize: '0.7rem', padding: '0.4rem 0.9rem' }}>
            GitHub ↗
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-teal">
              Live ↗
            </a>
          )}
        </div>
        <button onClick={() => setExpanded(e => !e)} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-faint)',
          transition: 'color 0.2s ease',
          padding: '0.3rem',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--blue-300)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
        >
          {expanded ? '▲ Less' : '▼ More'}
        </button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(96,165,250,0.15), transparent)' }} />

      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label reveal">Portfolio</div>
          <h2 className="heading-lg reveal">
            Selected <span className="grad-mixed">Projects</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/ashishmusmade45" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
            See All Projects on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
