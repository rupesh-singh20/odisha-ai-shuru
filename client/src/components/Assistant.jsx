import { useState } from 'react';
import { ArrowUp, Sparkles, Bot, LoaderCircle, CheckCircle2 } from 'lucide-react';

const oiaiQuickButtons = [
  'Find a Course',
  'AI Career Guidance',
  'Fees & Batches',
  'Internship Details',
  'Upcoming Workshops',
  'Talk to Counsellor'
];

export default function Assistant({ onOpenLeadModal }) {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function ask(text = message) {
    const clean = text.trim();
    if (!clean || loading) return;

    if (clean === 'Talk to Counsellor' && onOpenLeadModal) {
      onOpenLeadModal({
        title: 'Book Free Counselling with OIAI Advisor',
        subtitle: 'Our Bhubaneswar academic mentor will call you to guide your AI trajectory.'
      });
      return;
    }

    setMessage(clean);
    setLoading(true);
    setAnswer('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/assistant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean })
      });
      const data = await response.json();
      setAnswer(data.reply || 'I am processing your query. Please connect with our Bhubaneswar admissions team for personalized guidance.');
    } catch {
      // Local fallback with OIAI Knowledge Base
      if (clean.includes('Course') || clean.includes('Find')) {
        setAnswer('OIAI offers specialized programs in Generative AI & AI Agents (3/6 months), Machine Learning & Deep Learning (4/6 months), Data Science & Big Data, Full-Stack AI Web Apps, and Prompt Engineering. All courses feature live hands-on projects and verified project internships in Bhubaneswar or online.');
      } else if (clean.includes('Fees') || clean.includes('Batch')) {
        setAnswer('OIAI program fees range from ₹7,500 (Prompt Engineering) to ₹18,500 (Generative AI Masterclass) with zero-cost EMI options. New batches commence on October 25 and November 1, 2026. Classroom sessions take place at our Bhubaneswar campus, with hybrid & online cohorts.');
      } else if (clean.includes('Internship')) {
        setAnswer('Every student enrolled in our 4+ month professional tracks receives a guaranteed 2 to 3-month project internship working on real-world datasets and capstone applications, guided by industry mentors.');
      } else if (clean.includes('Workshop')) {
        setAnswer('Our next event is the "AI Career Workshop: From Computer Science Student to AI Engineer" on Saturday, Oct 24, 2026 at our Bhubaneswar center and online live stream. Registration is free!');
      } else {
        setAnswer(`Welcome to Odisha Institute of AI (OIAI). We specialize in turning curious learners into industry-ready AI practitioners through practical projects, mentorship, and career support in Bhubaneswar and worldwide.`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="assistant-section" id="assistant">
      <div className="assistant-art">
        <div className="assistant-orbit orbit-one" />
        <div className="assistant-orbit orbit-two" />
        <div className="assistant-bot">
          <Bot size={68} strokeWidth={1.25}/>
          <span className="bot-eye eye-left"/>
          <span className="bot-eye eye-right"/>
        </div>
        <span className="floating-chip chip-a" style={{ color: 'var(--brand-cyan-dark)', borderColor: 'var(--brand-cyan)' }}>
          <Sparkles size={14}/> OIAI Assistant
        </span>
        <span className="floating-chip chip-b">01 <small>Bhubaneswar</small></span>
        <span className="floating-chip chip-c">02 <small>AI Careers</small></span>
        <div className="assistant-art-note">Official OIAI<br/>Knowledge Hub.</div>
      </div>
      <div className="assistant-copy">
        <span className="eyebrow" style={{ color: 'var(--brand-cyan-dark)' }}>
          <span className="eyebrow-mark">✳</span> RD SECTION 31 • AI WEBSITE ASSISTANT
        </span>
        <h2>Hi! I'm the OIAI AI Assistant.<br/><em>What would you like to explore?</em></h2>
        <p>Get instant answers about course eligibility, fees, Bhubaneswar classroom batches, project internships, and career roadmaps.</p>
        
        <div className="assistant-form">
          <label className="sr-only" htmlFor="assistant-question">Ask the OIAI AI Assistant</label>
          <input 
            id="assistant-question" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && ask()} 
            placeholder="Ask about Generative AI, fees, offline batches in Bhubaneswar..." 
          />
          <button 
            onClick={() => ask()} 
            disabled={loading} 
            aria-label="Send question"
            className="button-cyan"
            style={{ width: '42px', height: '42px' }}
          >
            {loading ? <LoaderCircle className="spin" size={18}/> : <ArrowUp size={19}/>}
          </button>
        </div>

        <div className="suggestions" style={{ marginTop: '14px' }}>
          {oiaiQuickButtons.map((btn) => (
            <button key={btn} onClick={() => ask(btn)} style={{ transition: 'all 0.2s' }}>
              {btn}
            </button>
          ))}
        </div>

        {answer && (
          <div className="assistant-answer" style={{ borderLeftColor: 'var(--brand-cyan)' }}>
            <strong style={{ color: 'var(--brand-cyan-dark)' }}>OIAI AI Assistant says</strong>
            <p style={{ margin: '6px 0', fontSize: '13px', lineHeight: 1.6 }}>{answer}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button 
                onClick={() => onOpenLeadModal && onOpenLeadModal({ title: 'Speak to Counsellor' })}
                style={{ background: 'var(--brand-cyan)', color: '#fff', border: 0, padding: '4px 10px', borderRadius: '3px', fontSize: '10px', fontWeight: 700, cursor: 'pointer' }}
              >
                Speak to Human Counsellor
              </button>
              <a 
                href="https://wa.me/919437000000" 
                target="_blank" 
                rel="noreferrer" 
                style={{ fontSize: '10px', color: '#15803d', fontWeight: 700, alignSelf: 'center', textDecoration: 'none' }}
              >
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
