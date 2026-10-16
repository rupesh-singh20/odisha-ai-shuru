import { X, CheckCircle, Calendar, Clock, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  return (
    <div className="oiai-modal-overlay" onClick={onClose}>
      <div className="oiai-modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button className="oiai-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '1px', color: 'var(--brand-cyan-dark)', background: 'var(--brand-cyan-light)', padding: '3px 8px', borderRadius: '2px' }}>
            {course.category}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600 }}>
            {course.level}
          </span>
        </div>

        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', color: 'var(--green)', margin: '0 0 10px' }}>
          {course.title}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 18px' }}>
          {course.description}
        </p>

        {/* Quick specs grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', background: 'var(--paper)', border: '1px solid var(--line)', padding: '14px', borderRadius: '4px', marginBottom: '18px' }}>
          <div>
            <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block' }}>Duration</span>
            <strong style={{ fontSize: '12px', color: 'var(--green)' }}>{course.duration}</strong>
          </div>
          <div>
            <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block' }}>Learning Mode</span>
            <strong style={{ fontSize: '12px', color: 'var(--green)' }}>{course.mode}</strong>
          </div>
          <div>
            <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block' }}>Next Batch</span>
            <strong style={{ fontSize: '12px', color: 'var(--rust)' }}>{course.nextBatch}</strong>
          </div>
          <div>
            <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'block' }}>Course Fee</span>
            <strong style={{ fontSize: '13px', color: 'var(--green)' }}>{course.price}</strong>
          </div>
        </div>

        {/* Syllabus Modules */}
        {course.modules && (
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--green)', fontWeight: 700, margin: '0 0 10px' }}>
              Curriculum & Practical Modules:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {course.modules.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--green)' }}>
                  <CheckCircle size={15} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Technologies */}
        {course.technologies && (
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--green)', fontWeight: 700, margin: '0 0 8px' }}>
              Tools & Technologies Mastered:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {course.technologies.map((t) => (
                <span key={t} style={{ background: '#ffffff', border: '1px solid var(--line)', padding: '4px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 600, color: 'var(--green)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
          <button 
            className="button button-cyan"
            style={{ flex: 1 }}
            onClick={() => {
              onClose();
              onEnroll({
                title: `Enroll: ${course.title}`,
                program: course.title
              });
            }}
          >
            Enroll in This Program <ArrowRight size={16} />
          </button>
          <button className="button button-dark" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
