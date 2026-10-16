import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, X, Briefcase, GraduationCap } from 'lucide-react';
import { aiRoles } from '../data/courses.js';

export default function FindYourPath({ onSelectRole, onOpenLeadModal }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCardClick = (role) => {
    setSelectedRole(role);
    if (onSelectRole) onSelectRole(role);
  };

  return (
    <section className="section-wrap" style={{ paddingTop: '80px', paddingBottom: '70px' }} id="find-path">
      <div className="section-heading" style={{ marginBottom: '20px' }}>
        <div>
          <span className="eyebrow"><Sparkles size={13} /> SIGNATURE FEATURE • 2026-27</span>
          <h2>Find Your<br /><em>AI Career Path.</em></h2>
        </div>
        <p style={{ maxWidth: '380px' }}>
          What do you want to become? Explore roles shaping the AI revolution in India and globally, and see the exact learning trajectory to get there.
        </p>
      </div>

      <div className="role-grid">
        {aiRoles.map((role) => (
          <div 
            key={role.id} 
            className={`role-card ${selectedRole?.id === role.id ? 'is-active' : ''}`}
            onClick={() => handleCardClick(role)}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="role-badge">{role.badge}</span>
                <ArrowUpRight size={16} color="var(--brand-cyan)" />
              </div>
              <h4 className="role-title">{role.title}</h4>
              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 12px', lineHeight: 1.5 }}>
                {role.desc}
              </p>
            </div>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '10px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', color: 'var(--muted)', letterSpacing: '0.8px' }}>EST. PACKAGE</span>
              <span className="role-salary">{role.salary}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Role Details Modal/Flyout */}
      {selectedRole && (
        <div className="oiai-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="oiai-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="oiai-modal-close" onClick={() => setSelectedRole(null)}>
              <X size={20} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="role-badge">{selectedRole.badge}</span>
              <span style={{ fontSize: '11px', color: 'var(--brand-cyan-dark)', fontWeight: 700 }}>OIAI CAREER ROADMAP</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', color: 'var(--green)', margin: '0 0 8px' }}>
              {selectedRole.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 16px' }}>
              {selectedRole.desc}
            </p>

            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '14px', borderRadius: '4px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px' }}>
                <span style={{ color: 'var(--muted)', fontWeight: 600 }}>Estimated Salary Potential</span>
                <strong style={{ color: 'var(--rust)', fontSize: '14px' }}>{selectedRole.salary}</strong>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 700, marginBottom: '6px' }}>
                Core Skills Required:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedRole.skills.map((skill) => (
                  <span key={skill} style={{ background: '#fff', border: '1px solid var(--line)', padding: '4px 8px', borderRadius: '2px', fontSize: '10px', fontWeight: 600, color: 'var(--green)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderLeft: '3px solid var(--brand-cyan)', paddingLeft: '12px', margin: '14px 0' }}>
              <span style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: 700, color: 'var(--brand-cyan-dark)' }}>RECOMMENDED OIAI TRACK</span>
              <h5 style={{ margin: '4px 0', fontSize: '14px', color: 'var(--green)' }}>{selectedRole.recommendedCourse}</h5>
              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Includes structured live project + 3-month verified internship.</p>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button 
                className="button button-cyan"
                style={{ flex: 1 }}
                onClick={() => {
                  setSelectedRole(null);
                  if (onOpenLeadModal) {
                    onOpenLeadModal({
                      title: `Enquire: ${selectedRole.title} Track`,
                      program: selectedRole.recommendedCourse,
                      objective: `Become an ${selectedRole.title}`
                    });
                  }
                }}
              >
                Apply for this Career Track
              </button>
              <button 
                className="button button-dark"
                onClick={() => setSelectedRole(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
