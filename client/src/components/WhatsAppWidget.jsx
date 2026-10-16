import { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

const automatedOptions = [
  { id: 1, label: 'Course Enquiry', query: 'Hi OIAI! I would like to inquire about upcoming AI & GenAI courses.' },
  { id: 2, label: 'Internship Opportunities', query: 'Hi OIAI! I am interested in applying for the OIAI AI Project Internship.' },
  { id: 3, label: 'Upcoming Workshops', query: 'Hi OIAI! Please share details on upcoming AI weekend workshops in Bhubaneswar.' },
  { id: 4, label: 'Course Fees & EMI', query: 'Hi OIAI! Could you please share the fee structure and EMI options for AI programs?' },
  { id: 5, label: 'Career Guidance', query: 'Hi OIAI! I want to talk to an AI career advisor to understand which path is best for me.' },
  { id: 6, label: 'Corporate Training', query: 'Hi OIAI! We are seeking AI training & employee upskilling for our organization.' },
  { id: 7, label: 'College Partnership', query: 'Hi OIAI! We would like to discuss student bootcamps and faculty development programs for our college.' }
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const phoneNumber = '919437000000'; // OIAI Bhubaneswar Official

  const handleSelectOption = (query) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <div className="floating-whatsapp">
      {open && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <div>
              <strong style={{ fontSize: '13px', display: 'block' }}>Chat with AI Career Advisor</strong>
              <small style={{ fontSize: '10px', opacity: 0.85 }}>Odisha Institute of AI (OIAI)</small>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              style={{ background: 'transparent', border: 0, color: '#fff', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>
          <div className="whatsapp-popup-body">
            <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600 }}>
              Select an option to connect instantly:
            </span>
            {automatedOptions.map((opt) => (
              <button 
                key={opt.id}
                className="whatsapp-option-btn"
                onClick={() => handleSelectOption(opt.query)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{opt.label}</span>
                  <ChevronRight size={13} color="#25d366" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button 
        className="whatsapp-trigger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Chat with OIAI Career Advisor on WhatsApp"
      >
        {open ? <X size={26} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
