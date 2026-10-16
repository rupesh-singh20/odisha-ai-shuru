import { useState } from 'react';
import { Award, CheckCircle, Search, ShieldCheck, XCircle } from 'lucide-react';
import { demoCertificates } from '../data/courses.js';

export default function CertificateVerifier() {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const clean = certId.trim().toUpperCase();
    if (!clean) return;
    setSearched(true);
    if (demoCertificates[clean]) {
      setResult({ valid: true, data: demoCertificates[clean] });
    } else {
      setResult({ valid: false, id: clean });
    }
  };

  const handleQuickDemo = (id) => {
    setCertId(id);
    setSearched(true);
    setResult({ valid: true, data: demoCertificates[id] });
  };

  return (
    <section className="section-wrap" style={{ paddingTop: '60px', paddingBottom: '70px' }} id="verification">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><ShieldCheck size={14} color="var(--brand-cyan)" /> OFFICIAL CREDENTIALS • SECTION 22</span>
          <h2>Certificate<br /><em>Verification Portal.</em></h2>
        </div>
        <p>Verify the authenticity of course certifications, internship completion letters, and workshop credentials issued by OIAI.</p>
      </div>

      <div className="cert-verify-box">
        <form onSubmit={handleVerify} className="cert-input-row">
          <input 
            type="text" 
            placeholder="Enter Certificate ID (e.g. OIAI-2026-AI892)"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
          />
          <button type="submit" className="button button-cyan" style={{ gap: '6px' }}>
            <Search size={15} /> Verify
          </button>
        </form>

        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600 }}>Try sample IDs:</span>
          {Object.keys(demoCertificates).map((id) => (
            <button
              key={id}
              onClick={() => handleQuickDemo(id)}
              style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '3px 7px', borderRadius: '3px', fontSize: '10px', color: 'var(--brand-cyan-dark)', cursor: 'pointer' }}
            >
              {id}
            </button>
          ))}
        </div>

        {searched && result && (
          result.valid ? (
            <div className="cert-result-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803d' }}>
                <CheckCircle size={20} />
                <strong style={{ fontSize: '13px' }}>Authentic & Verified OIAI Credential</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px', fontSize: '12px' }}>
                <div><span style={{ color: 'var(--muted)' }}>Recipient:</span> <b>{result.data.studentName}</b></div>
                <div><span style={{ color: 'var(--muted)' }}>Certificate ID:</span> <b>{result.data.credentialId}</b></div>
                <div><span style={{ color: 'var(--muted)' }}>Program:</span> <b>{result.data.program}</b></div>
                <div><span style={{ color: 'var(--muted)' }}>Grade:</span> <b style={{ color: 'var(--brand-cyan-dark)' }}>{result.data.grade}</b></div>
                <div><span style={{ color: 'var(--muted)' }}>Issue Date:</span> <b>{result.data.issueDate}</b></div>
                <div><span style={{ color: 'var(--muted)' }}>Issuing Center:</span> <b>{result.data.center}</b></div>
              </div>
            </div>
          ) : (
            <div className="cert-result-card invalid">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b91c1c' }}>
                <XCircle size={20} />
                <strong style={{ fontSize: '13px' }}>Record Not Found for "{result.id}"</strong>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--muted)' }}>
                Please double-check the Certificate ID or contact the OIAI registrar office at verification@oiai.in.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
