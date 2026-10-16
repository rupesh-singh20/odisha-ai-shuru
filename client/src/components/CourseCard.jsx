import { ArrowUpRight, Bookmark, Clock3, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course, index, onSelectCourse, onEnroll }) {
  return (
    <motion.article 
      className="course-card" 
      data-reveal 
      initial={{ opacity: 0, y: 22 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <div className={`course-art art-${course.visual || 'network'}`}>
        {course.visual === 'brain' && <div className="brain-graphic"><span>AI</span><i /><i /><i /><i /></div>}
        {course.visual === 'network' && <div className="mini-network"><b /><b /><b /><b /><b /><b /><b /></div>}
        {course.visual === 'code' && <div className="code-window"><div className="window-dots">● ● ●</div><code>const idea = await<br/> buildSomething();<br/><em>return impact;</em></code></div>}
        {course.visual === 'data' && <div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/></div>}
        <span className="art-label">{course.category}</span>
        <button className="bookmark" aria-label={`Save ${course.title}`}><Bookmark size={17} /></button>
      </div>

      <div className="course-content">
        <div className="course-meta">
          <span>{course.level}</span>
          <span><Clock3 size={13}/> {course.duration}</span>
        </div>

        <h3 style={{ fontSize: '17px', lineHeight: 1.3, margin: '10px 0 6px' }}>{course.title}</h3>
        <p style={{ minHeight: '44px', fontSize: '11px', lineHeight: 1.5, color: 'var(--muted)', margin: '0 0 10px' }}>
          {course.description}
        </p>

        {course.technologies && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
            {course.technologies.slice(0, 4).map((tech) => (
              <span key={tech} style={{ fontSize: '9px', fontWeight: 600, background: 'rgba(0, 150, 199, 0.08)', color: 'var(--brand-cyan-dark)', padding: '2px 6px', borderRadius: '2px' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div style={{ fontSize: '10px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
          <Calendar size={12} color="var(--brand-cyan)" />
          <span>Next Batch: <b>{course.nextBatch || 'Upcoming'}</b></span>
        </div>

        <div className="course-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', marginTop: '8px' }}>
          <div>
            <strong style={{ fontSize: '16px', color: 'var(--green)' }}>{course.price}</strong>
            {course.originalPrice && (
              <small style={{ textDecoration: 'line-through', color: 'var(--muted)', marginLeft: '6px', fontSize: '10px' }}>
                {course.originalPrice}
              </small>
            )}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => onSelectCourse && onSelectCourse(course)}
              style={{ background: 'transparent', border: '1px solid var(--line)', padding: '5px 8px', borderRadius: '3px', fontSize: '10px', fontWeight: 700, color: 'var(--green)', cursor: 'pointer' }}
            >
              Details
            </button>
            <button 
              onClick={() => onEnroll && onEnroll({ title: `Enroll: ${course.title}`, program: course.title })}
              className="button button-cyan"
              style={{ padding: '5px 9px', fontSize: '10px', gap: '4px', height: '28px' }}
            >
              Enroll <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
