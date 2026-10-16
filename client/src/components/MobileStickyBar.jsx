import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function MobileStickyBar({ onOpenEnquire }) {
  return (
    <div className="mobile-sticky-bar" aria-label="Quick mobile action bar">
      <a href="tel:+919437000000" className="mobile-sticky-btn">
        <Phone size={16} />
        <span>Call OIAI</span>
      </a>
      <a 
        href="https://wa.me/919437000000?text=Hi%20OIAI,%20I%20would%20like%20to%20know%20more%20about%20your%20AI%20programs." 
        target="_blank" 
        rel="noreferrer" 
        className="mobile-sticky-btn"
      >
        <MessageCircle size={16} color="#25d366" />
        <span>WhatsApp</span>
      </a>
      <button 
        onClick={() => onOpenEnquire({ title: 'Course Enquiry', program: 'General AI Enquiry' })} 
        className="mobile-sticky-btn"
        style={{ border: 0, cursor: 'pointer' }}
      >
        <FileText size={16} />
        <span>Enquire Now</span>
      </button>
    </div>
  );
}
