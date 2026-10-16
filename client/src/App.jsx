import { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Sparkles, 
  BrainCircuit, 
  Code2, 
  Rocket, 
  Users, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Clock, 
  HelpCircle, 
  ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';

import Header from './components/Header.jsx';
import NeuralCanvas from './components/NeuralCanvas.jsx';
import CourseCard from './components/CourseCard.jsx';
import Assistant from './components/Assistant.jsx';
import FindYourPath from './components/FindYourPath.jsx';
import CourseFinder from './components/CourseFinder.jsx';
import CertificateVerifier from './components/CertificateVerifier.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';
import MobileStickyBar from './components/MobileStickyBar.jsx';
import LeadModal from './components/LeadModal.jsx';
import CourseDetailModal from './components/CourseDetailModal.jsx';
import CourseSidebar from './components/CourseSidebar.jsx';
import OIAILogo from './components/OIAILogo.jsx';

import useReveal from './hooks/useReveal.js';
import { 
  courses as initialCourses, 
  paths, 
  heroTrustBadges, 
  whyChooseOIAI, 
  learningMethodology, 
  roadmapSteps, 
  internshipTracks, 
  studentProjects, 
  studentSuccessStories, 
  upcomingWorkshops, 
  faqs 
} from './data/courses.js';

const categoryItems = [
  { icon: BrainCircuit, name: 'Artificial Intelligence', num: '01' },
  { icon: Sparkles, name: 'Generative AI & Agents', num: '02' },
  { icon: Code2, name: 'AI + Web Engineering', num: '03' },
  { icon: Rocket, name: 'Machine Learning', num: '04' },
  { icon: BookOpen, name: 'Data Science & Big Data', num: '05' }
];

export default function App() {
  useReveal();

  const [courseList, setCourseList] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [leadModalData, setLeadModalData] = useState({ isOpen: false, data: {} });
  const [isCourseSidebarOpen, setIsCourseSidebarOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeProjectTab, setActiveProjectTab] = useState('All');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/courses`)
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data) => {
        if (Array.isArray(data) && data.length) setCourseList(data);
      })
      .catch(() => {});
  }, []);

  const openLeadModal = (data = {}) => {
    setLeadModalData({ isOpen: true, data });
  };

  const closeLeadModal = () => {
    setLeadModalData({ isOpen: false, data: {} });
  };

  const filteredProjects = activeProjectTab === 'All' 
    ? studentProjects 
    : studentProjects.filter(p => p.category.toLowerCase().includes(activeProjectTab.toLowerCase()));

  return (
    <div id="top" className="app-shell">
      <Header 
        onOpenEnroll={(data) => openLeadModal(data)} 
        onSelectCourse={(course) => setSelectedCourse(course)}
        courses={courseList}
      />

      <main>
        {/* ================= SECTION 1: HERO (Preserving exact visual video background & animations) ================= */}
        <section className="hero hero-fullscreen">
          <video className="hero-video-bg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="https://freestockfootagearchive.com/wp-content/uploads/2020/10/Abstract-Energy-Flow-Dark-Background-Video-Loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" aria-hidden="true" />
          <div className="hero-network-layer" aria-hidden="true"><NeuralCanvas /></div>
          
          <div className="hero-inner section-wrap">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-mark" style={{ color: 'var(--brand-cyan)' }}>✳</span> 
                ODISHA INSTITUTE OF AI (OIAI) · 2026–27 
                <span className="eyebrow-line" style={{ background: 'var(--brand-cyan)' }}/>
              </div>
              <h1>
                Learn Artificial<br/>Intelligence.<br/>
                <span style={{ color: '#38bdf8' }}>Build Real Skills</span><span className="period">.</span>
              </h1>
              <p className="hero-lede">
                Industry-focused AI education for students, graduates and professionals—with practical projects, expert mentorship, internships and career guidance in Bhubaneswar and online.
              </p>
              
              <div className="hero-buttons">
                <a className="button button-cyan" href="#courses">
                  Explore AI Programs <ArrowRight size={17}/>
                </a>
                <button 
                  className="story-link" 
                  onClick={() => openLeadModal({ title: 'Talk to an AI Career Advisor', subtitle: 'Get personalized roadmap advice from our Bhubaneswar mentors.' })}
                  style={{ background: 'transparent', border: 0, textAlign: 'left', cursor: 'pointer' }}
                >
                  <span style={{ borderColor: '#38bdf8', color: '#38bdf8' }}><Play size={14} fill="currentColor"/></span> 
                  Talk to Career Advisor <small>Free 1-on-1 Guidance</small>
                </button>
              </div>

              <div className="hero-stats">
                <div><strong>100<span>%</span></strong><small>Hands-On Projects</small></div>
                <div><strong>3/6<span>Mo</span></strong><small>Live Internships</small></div>
                <div><strong>Bhubaneswar<span>+</span></strong><small>Campus & Online</small></div>
              </div>
            </div>

            <div className="hero-video-art" aria-label="Animated AI neural core">
              <div className="video-art-kicker" style={{ color: '#38bdf8' }}>
                <span className="live-dot" style={{ background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }}/> 
                OIAI INTELLIGENCE IN MOTION
              </div>
              <div className="video-ai-orb">
                <div className="video-ai-core" style={{ background: 'radial-gradient(circle at 35% 25%, #38bdf8 0%, #0077b6 48%, #0b2540 100%)' }}>
                  Ai
                </div>
                <span className="video-ai-ring ring-a"/><span className="video-ai-ring ring-b"/><span className="video-ai-ring ring-c"/>
                <span className="video-ai-dot dot-a"/><span className="video-ai-dot dot-b"/><span className="video-ai-dot dot-c"/>
              </div>
              <div className="video-art-caption">
                <span style={{ color: '#38bdf8' }}>BUILD SKILLS → BUILD WITH AI → BUILD FUTURE</span>
                <small>Bhubaneswar, Odisha · Global Reach</small>
              </div>
              <div className="video-art-stamp">
                ଓଡ଼ିଶା<br/><b style={{ color: '#38bdf8' }}>OIAI / 2026</b>
              </div>
            </div>
          </div>

          <div className="hero-bottom-note hero-video-credit section-wrap">
            <span>01 / CORE MISSION</span>
            <span>From AI Learning to AI Careers • Bhubaneswar, Odisha</span>
            <a 
              href="#brochure" 
              onClick={(e) => { e.preventDefault(); openLeadModal({ title: 'Download Complete Course Brochure (PDF)', source: 'Hero Brochure' }); }}
              style={{ color: '#38bdf8', fontWeight: 700 }}
            >
              DOWNLOAD BROCHURE ↓
            </a>
          </div>
        </section>

        {/* ================= SECTION 8: HERO TRUST INDICATORS (RD SECTION 8) ================= */}
        <div className="section-wrap">
          <div className="trust-badges-bar">
            {heroTrustBadges.map((badge, idx) => (
              <div key={idx} className="trust-badge-item">
                <span className="trust-badge-dot" />
                <span>{badge.label}</span>
                {idx < heroTrustBadges.length - 1 && <span style={{ opacity: 0.3, marginLeft: '6px' }}>|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 9: FIND YOUR AI PATH (RD SECTION 9 SIGNATURE FEATURE) ================= */}
        <FindYourPath 
          onOpenLeadModal={(data) => openLeadModal(data)} 
        />

        {/* ================= CATEGORY GRID ================= */}
        <section className="category-section section-wrap" data-reveal>
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Sparkles size={13}/> TARGETED LEARNING DOMAINS</span>
              <h2>Pick your domain.<br/><em>Build high-value skills.</em></h2>
            </div>
            <p>From fundamental Python and data analysis to multi-agent Generative AI pipelines and cloud deployment.</p>
          </div>
          <div className="category-grid">
            {categoryItems.map(({icon: Icon, name, num}) => (
              <a href="#courses" className="category-item" key={name}>
                <span className="category-number">{num}</span>
                <Icon size={24} strokeWidth={1.5} color="var(--brand-cyan)"/>
                <strong>{name}</strong>
                <ArrowUpRight className="category-arrow" size={16}/>
              </a>
            ))}
          </div>
        </section>

        {/* ================= SECTION 10: AI PROGRAMS (RD SECTION 10) ================= */}
        <section className="courses-section section-wrap" id="courses">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Sparkles size={13}/> INDUSTRY-FOCUSED CURRICULUM</span>
              <h2>Featured AI Programs<br/><em>& Certifications.</em></h2>
            </div>
            <a href="#course-finder" className="text-link" style={{ color: 'var(--brand-cyan-dark)' }}>
              Use AI Course Finder <ArrowUpRight size={16}/>
            </a>
          </div>
          <div className="course-grid">
            {courseList.map((course, i) => (
              <CourseCard 
                key={course._id || course.id || course.title} 
                course={course} 
                index={i}
                onSelectCourse={(c) => setSelectedCourse(c)}
                onEnroll={(data) => openLeadModal(data)}
              />
            ))}
          </div>
        </section>

        {/* ================= SECTION 11: INTERACTIVE AI COURSE FINDER (RD SECTION 11) ================= */}
        <CourseFinder onOpenLeadModal={(data) => openLeadModal(data)} />

        {/* ================= SECTION 12: WHY CHOOSE OIAI (RD SECTION 12 SIX PILLARS) ================= */}
        <section className="build-strip" id="why-oiai">
          <div className="build-inner section-wrap">
            <div className="build-screen">
              <div className="screen-top">
                <span/><span/><span/> 
                <small>oiai-lab / bhubaneswar-campus</small>
              </div>
              <div className="screen-code">
                <p><i>const</i> mission = <b>"AI Careers for Odisha"</b>;</p>
                <p><i>const</i> pillars = [HandsOn, Mentorship, Internships];</p>
                <p className="code-glow">oiai.transform(student, pillars); <span>▍</span></p>
                <div className="screen-neurons"><span/><span/><span/><span/><span/><span/><span/></div>
              </div>
              <div className="screen-footer">
                <span>CAMPUS BHUBANESWAR ●</span>
                <span>GLOBAL RECOGNITION</span>
              </div>
            </div>
            <div className="build-copy" data-reveal>
              <span className="eyebrow"><Sparkles size={13}/> WHY CHOOSE OIAI • 6 CORE PILLARS</span>
              <h2>Why OIAI?<br/><em>Built for real careers.</em></h2>
              <p>OIAI is not another generic coaching institute. We are Odisha’s AI-first career acceleration platform delivering practical competencies that industry actually hires for.</p>
              <div className="build-points">
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 01 AI-First Curriculum</span>
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 02 Hands-On Projects</span>
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 03 Industry Mentorship</span>
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 04 Internship Opportunities</span>
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 05 Career Preparation</span>
                <span><CheckCircle size={15} color="var(--brand-cyan)"/> 06 Flexible Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 13 & 14: AI LEARNING METHODOLOGY & ROADMAP (RD SECTION 13 & 14) ================= */}
        <section className="section-wrap" style={{ paddingTop: '80px', paddingBottom: '70px' }} id="methodology">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Sparkles size={13}/> 7-STAGE PROGRESSION</span>
              <h2>AI Learning Methodology<br/><em>& Career Roadmap.</em></h2>
            </div>
            <p>A proven progression: LEARN → PRACTICE → BUILD → INTERN → CERTIFY → GET CAREER READY.</p>
          </div>

          <div className="methodology-flow">
            {learningMethodology.map((m, idx) => (
              <div key={idx} className="methodology-step">
                <span className="methodology-tag">{m.stage}</span>
                <h4 className="methodology-title">{m.name}</h4>
                <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '6px 0 0', lineHeight: 1.4 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Career Roadmap Pipeline */}
          <div style={{ marginTop: '36px', background: '#ffffff', border: '1px solid var(--line)', padding: '24px', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '1.5px', fontWeight: 800, color: 'var(--brand-cyan-dark)' }}>
              YOUR ROADMAP TO AN AI CAREER (RD SECTION 14)
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginTop: '16px' }}>
              {roadmapSteps.map((step, idx) => (
                <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ 
                    padding: '8px 12px', 
                    background: idx >= 10 ? 'var(--green)' : 'var(--paper)', 
                    color: idx >= 10 ? '#ffffff' : 'var(--green)',
                    borderRadius: '4px', 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    border: '1px solid var(--line)' 
                  }}>
                    {step}
                  </div>
                  {idx < roadmapSteps.length - 1 && (
                    <span style={{ color: 'var(--brand-cyan)', fontWeight: 800 }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: AI INTERNSHIP PORTAL (RD SECTION 15) ================= */}
        <section className="section-wrap" style={{ paddingTop: '50px', paddingBottom: '70px' }} id="internships">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Briefcase size={13}/> GUARANTEED PROJECT EXPERIENCE</span>
              <h2>AI Internship Portal.<br/><em>Real problems. Real code.</em></h2>
            </div>
            <p>Every graduate from OIAI professional tracks completes a structured project internship with mentor code reviews and live deployment.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {internshipTracks.map((track, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--line)', padding: '20px', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: 'var(--brand-cyan-dark)', background: 'var(--brand-cyan-light)', padding: '2px 7px', borderRadius: '2px' }}>
                      {track.openings}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--muted)' }}><Clock size={11} style={{ display: 'inline', marginRight: '3px' }}/>{track.duration}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: 'var(--green)', margin: '4px 0 8px' }}>
                    {track.name}
                  </h4>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0 0 14px' }}>
                    <b>Eligibility:</b> {track.eligibility}
                  </p>
                </div>
                <button 
                  className="button button-cyan"
                  style={{ width: '100%', padding: '10px', fontSize: '11px' }}
                  onClick={() => openLeadModal({
                    title: `Apply for ${track.name} Internship`,
                    program: `Internship: ${track.name}`,
                    objective: 'Gain verified internship experience'
                  })}
                >
                  Apply for Internship <ArrowRight size={14}/>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 16 & 17: CORPORATE & COLLEGE PARTNERSHIPS ================= */}
        <section className="mission-section" id="partnerships">
          <div className="mission-inner section-wrap">
            <div className="mission-copy" data-reveal>
              <span className="eyebrow">ENTERPRISE & ACADEMIC COLLABORATION <span className="eyebrow-line"/></span>
              <h2>Upskill Teams.<br/><em>Empower Campuses.</em></h2>
              <p>OIAI delivers specialized B2B Generative AI workshops for enterprises, alongside Faculty Development Programs (FDP) and student hackathons for colleges across Odisha.</p>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <button 
                  className="button button-cyan"
                  onClick={() => openLeadModal({ title: 'Request Corporate AI Training', program: 'Corporate AI Training' })}
                >
                  Request Corporate Training
                </button>
                <button 
                  className="button button-cream"
                  onClick={() => openLeadModal({ title: 'College & University Partnership', program: 'College AI Partnership' })}
                >
                  Partner With OIAI
                </button>
              </div>
            </div>
            
            <div className="mission-visual" data-reveal>
              <div className="mission-photo">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85" alt="OIAI enterprise collaboration" />
              </div>
              <div className="mission-ai-card">
                <div className="mini-ai-icon" style={{ background: '#e0f2fe', color: '#0096c7' }}>
                  <Building2 size={24}/>
                </div>
                <span>Corporate & Colleges.<br/><b>Future-Ready Teams.</b></span>
                <div className="mini-pulse"/>
              </div>
              <div className="pattern-disc"/>
              <span className="photo-caption">Bhubaneswar Tech Ecosystem.</span>
            </div>
          </div>
        </section>

        {/* ================= SECTION 18: UPCOMING AI WORKSHOPS & EVENTS ================= */}
        <section className="section-wrap" style={{ paddingTop: '80px', paddingBottom: '70px' }} id="workshops">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Calendar size={13}/> UPCOMING EVENTS & BOOTCAMPS</span>
              <h2>AI Workshops<br/><em>& Hands-On Masterclasses.</em></h2>
            </div>
            <p>Learn practical AI development in an intensive, interactive weekend format with industry leaders.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {upcomingWorkshops.map((ws) => (
              <div key={ws.id} style={{ background: '#ffffff', border: '1px solid var(--line)', padding: '24px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: 'var(--brand-cyan-dark)', background: 'var(--brand-cyan-light)', padding: '3px 8px', borderRadius: '2px' }}>
                    {ws.seats}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#15803d' }}>{ws.price}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: 'var(--green)', margin: '6px 0 8px' }}>
                  {ws.title}
                </h3>
                <div style={{ fontSize: '11px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                  <div><b>Date:</b> {ws.date} ({ws.time})</div>
                  <div><b>Venue:</b> {ws.venue}</div>
                  <div><b>Speaker:</b> {ws.speaker}</div>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--green)', background: 'var(--paper)', padding: '8px 10px', borderRadius: '3px', margin: '0 0 16px' }}>
                  <b>Topic:</b> {ws.topic}
                </p>
                <button 
                  className="button button-cyan"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => openLeadModal({
                    title: `Register: ${ws.title}`,
                    program: `Workshop: ${ws.title}`,
                    objective: 'Attend Weekend Workshop'
                  })}
                >
                  Register Now (Free) <ArrowRight size={15}/>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 20 & 21: STUDENT PROJECTS & SUCCESS STORIES ================= */}
        <section className="section-wrap" style={{ paddingTop: '60px', paddingBottom: '70px' }} id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Sparkles size={13}/> PORTFOLIO & PROOF OF WORK</span>
              <h2>Student Projects<br/><em>& Real Impact.</em></h2>
            </div>
            <p>Every student graduates with real GitHub repositories, deployed web applications, and measurable results.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {studentProjects.map((p) => (
              <div key={p.id} style={{ background: '#ffffff', border: '1px solid var(--line)', padding: '22px', borderRadius: '5px' }}>
                <span style={{ fontSize: '9px', fontWeight: 800, color: 'var(--brand-cyan-dark)', background: 'var(--brand-cyan-light)', padding: '2px 7px', borderRadius: '2px' }}>
                  {p.category}
                </span>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: 'var(--green)', margin: '8px 0 10px' }}>
                  {p.title}
                </h4>
                <div style={{ fontSize: '11px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div><b style={{ color: 'var(--rust)' }}>Problem:</b> {p.problem}</div>
                  <div><b style={{ color: 'var(--brand-cyan-dark)' }}>Tech:</b> {p.technology}</div>
                  <div><b style={{ color: '#15803d' }}>Result:</b> {p.result}</div>
                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '8px', marginTop: '6px', fontSize: '10px' }}>
                    <b>Built by:</b> {p.student}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Success Stories */}
          <div style={{ marginTop: '40px', background: 'var(--paper)', border: '1px solid var(--line)', padding: '24px', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '1.5px', fontWeight: 800, color: 'var(--brand-cyan-dark)' }}>
              CAREER OUTCOMES & TESTIMONIALS (RD SECTION 21)
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
              {studentSuccessStories.map((story, i) => (
                <div key={i} style={{ background: '#fff', padding: '16px', borderRadius: '4px', border: '1px solid var(--line)' }}>
                  <strong style={{ fontSize: '14px', color: 'var(--green)', display: 'block' }}>{story.name}</strong>
                  <span style={{ fontSize: '11px', color: 'var(--brand-cyan-dark)', fontWeight: 700 }}>{story.role}</span>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '8px 0 4px', lineHeight: 1.5 }}>
                    <b>Before:</b> {story.before}<br/>
                    <b>What they learned:</b> {story.learned}<br/>
                    <b>Outcome:</b> <span style={{ color: '#15803d', fontWeight: 600 }}>{story.outcome}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 22: CERTIFICATE VERIFICATION PORTAL ================= */}
        <CertificateVerifier />

        {/* ================= SECTION 31: AI CHATBOT ASSISTANT (RD SECTION 31) ================= */}
        <Assistant onOpenLeadModal={(data) => openLeadModal(data)} />

        {/* ================= SECTION 24: FAQ & AEO SEARCH STRATEGY ================= */}
        <section className="section-wrap" style={{ paddingTop: '70px', paddingBottom: '80px' }} id="faqs">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><HelpCircle size={13}/> BHUBANESWAR & AI ADMISSIONS FAQ</span>
              <h2>Frequently Asked<br/><em>Questions.</em></h2>
            </div>
            <p>Clear, direct answers for students, graduates, and working professionals exploring AI careers in Odisha.</p>
          </div>

          <div style={{ maxWidth: '820px', marginInline: 'auto' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{ borderBottom: '1px solid var(--line)', padding: '18px 0', cursor: 'pointer' }}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: 'var(--green)', margin: 0 }}>
                      {faq.q}
                    </h4>
                    {isOpen ? <ChevronUp size={18} color="var(--brand-cyan)"/> : <ChevronDown size={18} color="var(--muted)"/>}
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', marginTop: '10px' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= FINAL CTA SECTION (RD SECTION 47) ================= */}
        <section className="community-section">
          <div className="community-decoration">✳</div>
          <div className="community-inner section-wrap" data-reveal>
            <div className="community-copy">
              <span className="eyebrow" style={{ color: '#38bdf8' }}>BUILD YOUR FUTURE WITH ARTIFICIAL INTELLIGENCE</span>
              <h2>Learn AI. Build Real Projects.<br/><em>Launch Your Career.</em></h2>
              <p>
                OIAI helps students, graduates, and professionals develop practical, future-ready skills. Start today with offline batches in Bhubaneswar or interactive online live cohorts.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="button button-cream"
                  onClick={() => openLeadModal({ title: 'Admissions 2026-27: Enroll Now', program: 'Generative AI & AI Agents' })}
                >
                  Enroll Now <ArrowRight size={17}/>
                </button>
                <button 
                  className="button button-cyan"
                  onClick={() => openLeadModal({ title: 'Book Free 1-on-1 AI Counselling' })}
                >
                  Book Free Counselling
                </button>
              </div>
            </div>

            <div className="community-ai-wrap">
              <div className="community-ai">
                <NeuralCanvas/>
                <div className="community-ai-label">
                  <Sparkles size={15}/> OIAI BHUBANESWAR • FUTURE IN PROGRESS
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <OIAILogo size={46} showText={true} variant="light" />
            <p>
              Build the Skills. Build with AI. Build the Future.<br/>
              Odisha Institute of Artificial Intelligence (OIAI)<br/>
              Bhubaneswar Campus & Online Academy.
            </p>
            <div style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
              <b>Location:</b> Bhubaneswar, Odisha, India<br/>
              <b>Helpline:</b> +91 94370 00000 | <b>Email:</b> admissions@oiai.in
            </div>
          </div>

          <div className="footer-links">
            <strong style={{ color: 'var(--brand-cyan)' }}>AI PROGRAMS</strong>
            <a href="#courses">Generative AI & Agents</a>
            <a href="#courses">Machine Learning & DL</a>
            <a href="#courses">Data Science & Analytics</a>
            <a href="#courses">Full-Stack AI Web Apps</a>
            <a href="#courses">AI Automation Workflows</a>
          </div>

          <div className="footer-links">
            <strong style={{ color: 'var(--brand-cyan)' }}>CAREERS & INTERNSHIPS</strong>
            <a href="#find-path">Find Your AI Path</a>
            <a href="#course-finder">AI Course Finder</a>
            <a href="#internships">Internship Portal</a>
            <a href="#workshops">Upcoming Workshops</a>
            <a href="#verification">Certificate Verification</a>
          </div>

          <div className="footer-note" style={{ borderLeftColor: 'rgba(0,150,199,0.3)' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-cyan)' }}>BHUBANESWAR, ODISHA</span>
            <p>From AI Learning<br/><em>to AI Careers.</em></p>
            <span className="footer-sun" style={{ color: 'rgba(0,150,199,0.25)' }}>☼</span>
          </div>
        </div>

        <div className="footer-bottom section-wrap">
          <span>© 2026–2027 Odisha Institute of Artificial Intelligence (OIAI). All Rights Reserved.</span>
          <span>Primary Location: Bhubaneswar, Odisha • OIAI.in</span>
          <a href="#top" style={{ color: 'var(--brand-cyan)' }}>Back to top ↑</a>
        </div>
      </footer>

      {/* Floating WhatsApp Widget (RD Section 30) */}
      <WhatsAppWidget />

      {/* Mobile Sticky Action Bar (RD Section 38) */}
      <MobileStickyBar onOpenEnquire={(data) => openLeadModal(data)} />

      {/* Universal Lead Generation Modal (RD Section 28 & 29) */}
      <LeadModal 
        isOpen={leadModalData.isOpen} 
        onClose={closeLeadModal} 
        initialData={leadModalData.data} 
      />

      {/* Course Detail Modal (RD Section 10) */}
      <CourseDetailModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)}
        onEnroll={(data) => openLeadModal(data)}
      />
    </div>
  );
}
