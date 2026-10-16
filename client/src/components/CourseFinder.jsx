import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/courses.js';

export default function CourseFinder({ onOpenLeadModal }) {
  const [level, setLevel] = useState('College');
  const [goal, setGoal] = useState('Job');
  const [duration, setDuration] = useState('3–6 months');

  const levels = ['School', 'College', 'Graduate', 'Working Professional', 'Developer', 'Entrepreneur'];
  const goals = ['Job', 'Career switch', 'Freelancing', 'Business automation', 'Research', 'Upskilling'];
  const durations = ['1–2 months', '3–6 months', '6–12 months'];

  // Smart Recommendation Logic based on RD rules
  const getRecommendation = () => {
    if (goal === 'Business automation' || level === 'Entrepreneur') {
      return courses.find(c => c.id === 'ai-automation-workflows') || courses[0];
    }
    if (level === 'Developer' || goal === 'Freelancing') {
      return courses.find(c => c.id === 'fullstack-ai-web') || courses[0];
    }
    if (goal === 'Research' || level === 'Graduate') {
      return courses.find(c => c.id === 'ml-deep-learning') || courses[1];
    }
    if (duration === '1–2 months') {
      return courses.find(c => c.id === 'prompt-engineering-tools') || courses[0];
    }
    return courses.find(c => c.id === 'genai-agents') || courses[0];
  };

  const recCourse = getRecommendation();

  return (
    <section className="section-wrap" style={{ paddingTop: '50px', paddingBottom: '70px' }} id="course-finder">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><Sparkles size={13} /> INTERACTIVE AI COURSE FINDER • RD SECTION 11</span>
          <h2>Not sure where to start?<br /><em>Let our AI match your path.</em></h2>
        </div>
        <p>Answer three questions to get your personalized curriculum recommendation, duration roadmap, and career outcome.</p>
      </div>

      <div className="finder-card">
        {/* Step 1 */}
        <div style={{ marginBottom: '22px' }}>
          <div className="finder-step-indicator active">
            <span className="finder-step-num">1</span>
            <span>What is your current background/level?</span>
          </div>
          <div className="finder-options">
            {levels.map((item) => (
              <button
                key={item}
                className={`finder-pill ${level === item ? 'selected' : ''}`}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: '22px' }}>
          <div className="finder-step-indicator active">
            <span className="finder-step-num">2</span>
            <span>What do you want to achieve?</span>
          </div>
          <div className="finder-options">
            {goals.map((item) => (
              <button
                key={item}
                className={`finder-pill ${goal === item ? 'selected' : ''}`}
                onClick={() => setGoal(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div style={{ marginBottom: '24px' }}>
          <div className="finder-step-indicator active">
            <span className="finder-step-num">3</span>
            <span>How much time can you invest?</span>
          </div>
          <div className="finder-options">
            {durations.map((item) => (
              <button
                key={item}
                className={`finder-pill ${duration === item ? 'selected' : ''}`}
                onClick={() => setDuration(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation Output */}
        <div style={{ background: '#f8fdfb', border: '1px solid #b7e4c7', padding: '20px', borderRadius: '4px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '1.5px', fontWeight: 800, color: 'var(--brand-cyan-dark)' }}>
              ★ RECOMMENDED OIAI PROGRAM (98% MATCH)
            </span>
            <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 700 }}>
              Mode: Bhubaneswar Offline / Online Live
            </span>
          </div>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', margin: '10px 0 6px', color: 'var(--green)' }}>
            {recCourse.title}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 14px', lineHeight: 1.6 }}>
            {recCourse.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
            {recCourse.technologies.map((t) => (
              <span key={t} style={{ background: '#ffffff', border: '1px solid #c7ecee', padding: '4px 8px', borderRadius: '2px', fontSize: '10px', color: 'var(--green)', fontWeight: 600 }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <button 
              className="button button-cyan"
              onClick={() => onOpenLeadModal({
                title: `Enquire: ${recCourse.title}`,
                program: recCourse.title,
                objective: `Goal: ${goal} | Background: ${level}`,
                source: 'Course Finder'
              })}
            >
              Enroll in Recommended Program <ArrowRight size={16} />
            </button>
            <button 
              className="button button-dark"
              onClick={() => onOpenLeadModal({
                title: `Download Syllabus: ${recCourse.title}`,
                program: recCourse.title,
                source: 'Course Finder Brochure'
              })}
            >
              Download Detailed Syllabus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
