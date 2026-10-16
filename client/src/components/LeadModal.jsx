import { useState } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: 'Bhubaneswar',
    qualification: 'College Student',
    occupation: 'Student',
    program: initialData.program || 'Generative AI & AI Agents',
    mode: 'Offline (Bhubaneswar)',
    timing: 'Weekend Batch',
    objective: initialData.objective || 'Get Job-Ready AI Skills',
    ctaSource: initialData.source || 'Website Lead'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch {
      // Demo fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="oiai-modal-overlay" onClick={onClose}>
      <div className="oiai-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="oiai-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={54} color="#0096c7" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', color: 'var(--green)', margin: '0 0 10px' }}>
              Enquiry Received!
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px' }}>
              Thank you, <b>{formData.name}</b>. An OIAI Academic Counsellor from our Bhubaneswar center will contact you at <b>{formData.mobile}</b> with the complete curriculum and admission details.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a 
                href={`https://wa.me/919437000000?text=${encodeURIComponent(`Hi OIAI, I just registered for ${formData.program}. My name is ${formData.name}.`)}`}
                target="_blank" 
                rel="noreferrer"
                className="button button-cyan"
                style={{ textDecoration: 'none' }}
              >
                Chat on WhatsApp Now
              </a>
              <button className="button button-dark" onClick={onClose}>Done</button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="eyebrow"><Sparkles size={13} /> ODISHA INSTITUTE OF AI</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: 'var(--green)', margin: '6px 0 4px' }}>
                {initialData.title || 'Start Your AI Journey'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                {initialData.subtitle || 'Connect with OIAI career advisors and access curriculum details.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Full Name *</label>
                <input 
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  placeholder="e.g. Priyadarshi Dash"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Mobile Number *</label>
                <input 
                  required
                  type="tel"
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Email Address *</label>
                <input 
                  required
                  type="email"
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>City *</label>
                <select 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Rourkela">Rourkela</option>
                  <option value="Berhampur">Berhampur</option>
                  <option value="Sambalpur">Sambalpur</option>
                  <option value="Other Odisha City">Other (Odisha)</option>
                  <option value="Outside Odisha">Outside Odisha (Online)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Qualification</label>
                <select 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                >
                  <option value="+2 Students">+2 Student (Science/Commerce)</option>
                  <option value="College Student">College Student (B.Tech / BCA / BSc)</option>
                  <option value="Graduate">Recent Graduate</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Learning Mode</label>
                <select 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                >
                  <option value="Offline (Bhubaneswar)">Bhubaneswar Campus (Classroom)</option>
                  <option value="Online Live Interactive">Online Live Interactive</option>
                  <option value="Hybrid (Weekend Lab)">Hybrid (Bhubaneswar Labs)</option>
                </select>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--green)', marginBottom: '5px' }}>Program Interested In</label>
                <select 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: '3px', fontSize: '13px', background: '#fff' }}
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                >
                  <option value="Generative AI & AI Agents">Generative AI & AI Agents (3/6 Months)</option>
                  <option value="Machine Learning & Deep Learning">Machine Learning & Deep Learning (4/6 Months)</option>
                  <option value="Full-Stack AI & Web Apps">Full-Stack AI & Intelligent Web Apps</option>
                  <option value="Data Science & Big Data Analytics">Data Science & Big Data Analytics</option>
                  <option value="AI Automation & Workflows">AI Automation & Autonomous Workflows</option>
                  <option value="Prompt Engineering & Generative Tools">Prompt Engineering & Generative Tools</option>
                  <option value="AI Internship Track">AI Project Internship (Industry Track)</option>
                  <option value="Corporate / College Training">Corporate / College Workshop</option>
                </select>
              </div>

              <div style={{ gridColumn: 'span 2', marginTop: '6px' }}>
                <button 
                  type="submit" 
                  className="button button-cyan"
                  disabled={loading}
                  style={{ width: '100%', padding: '14px', fontSize: '13px' }}
                >
                  {loading ? 'Submitting...' : 'Submit & Connect with Advisor'} <ArrowRight size={16} />
                </button>
                <p style={{ textAlign: 'center', fontSize: '10px', color: 'var(--muted)', marginTop: '8px' }}>
                  No spam guaranteed • Call or WhatsApp: +91 94370 00000 (OIAI Bhubaneswar)
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
