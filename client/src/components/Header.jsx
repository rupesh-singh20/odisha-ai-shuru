import { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  BrainCircuit, 
  Code2, 
  BarChart3 
} from 'lucide-react';
import OIAILogo from './OIAILogo.jsx';
import { courses as defaultCourses } from '../data/courses.js';

export default function Header({ onOpenEnroll, onSelectCourse, courses: propCourses }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'programs' | 'solutions' | null

  const courseList = propCourses && propCourses.length > 0 ? propCourses : defaultCourses;

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  // Main 4 flagship tracks (matching Docebo's Learning, Skills Intelligence, Enterprise Knowledge, AgentHub)
  const flagshipPrograms = [
    {
      id: 'genai-agents',
      title: 'Learning & Generative AI',
      subtitle: 'Create, deliver, and measure learning at scale with LLMs & autonomous multi-agents.',
      icon: Sparkles,
      iconColor: '#0284c7',
      iconBg: '#e0f2fe',
      courseRef: courseList.find(c => c.title.toLowerCase().includes('generative')) || courseList[0]
    },
    {
      id: 'ml-deep-learning',
      title: 'Skills Intelligence',
      subtitle: 'Infer skills, spot gaps, and develop talent with machine learning & deep neural nets.',
      icon: BrainCircuit,
      iconColor: '#7c3aed',
      iconBg: '#ede9fe',
      courseRef: courseList.find(c => c.title.toLowerCase().includes('machine')) || courseList[1]
    },
    {
      id: 'fullstack-ai-web',
      title: 'Enterprise Knowledge',
      subtitle: 'Get trusted answers right when you need them with full-stack intelligent AI apps.',
      icon: Code2,
      iconColor: '#059669',
      iconBg: '#d1fae5',
      courseRef: courseList.find(c => c.title.toLowerCase().includes('web')) || courseList[2]
    },
    {
      id: 'data-science-analytics',
      title: 'AgentHub & Data Intelligence',
      subtitle: 'Agents that do real work for you using predictive analytics and workflow automation.',
      icon: BarChart3,
      iconColor: '#ea580c',
      iconBg: '#ffedd5',
      courseRef: courseList.find(c => c.title.toLowerCase().includes('data')) || courseList[3]
    }
  ];

  // Center column capabilities list (matches Docebo's 2-column Capabilities list)
  const capabilitiesCol1 = [
    { name: 'Advanced Analytics', href: '#courses' },
    { name: 'Content Creator', href: '#courses' },
    { name: 'Content Marketplace', href: '#courses' },
    { name: 'Communities', href: '#courses' },
    { name: 'Companion', href: '#courses' },
    { name: 'Headless Learning', href: '#courses' }
  ];

  const capabilitiesCol2 = [
    { name: 'Integrations', href: '#courses' },
    { name: 'Roleplay', href: '#courses' },
    { name: 'MCP', href: '#courses' },
    { name: 'eCommerce', href: '#courses' },
    { name: 'Gamification', href: '#courses' }
  ];

  return (
    <header className="site-header">
      {/* Brand Logo */}
      <a className="brand" href="#top" aria-label="Odisha Institute of AI (OIAI) home" style={{ textDecoration: 'none' }}>
        <OIAILogo size={38} showText={true} />
      </a>

      {/* Main Navbar Links */}
      <nav className={mobileOpen ? 'nav-links nav-open' : 'nav-links'}>
        {/* Nav Item 1: AI Programs with Docebo-style Down Option */}
        <div 
          className={`nav-dropdown-trigger-wrap ${activeDropdown === 'programs' ? 'is-open' : ''}`}
          onMouseEnter={() => setActiveDropdown('programs')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a 
            href="#courses" 
            className="nav-link-btn"
            onClick={(e) => {
              if (window.innerWidth <= 900) {
                e.preventDefault();
                setActiveDropdown(activeDropdown === 'programs' ? null : 'programs');
              }
            }}
          >
            <span>AI Programs</span>
            <ChevronDown size={14} className="dropdown-chevron" />
          </a>

          {/* Docebo Mega Dropdown Panel directly inside trigger wrap */}
          <div className="docebo-mega-dropdown">
            <div className="docebo-dropdown-inner">
              {/* Column 1 (Left): 4 Program Cards with Icons */}
              <div className="docebo-col-cards">
                {flagshipPrograms.map((prog) => {
                  const Icon = prog.icon;
                  return (
                    <div
                      key={prog.id}
                      className="docebo-program-card"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick();
                        if (onSelectCourse && prog.courseRef) {
                          onSelectCourse(prog.courseRef);
                        }
                      }}
                    >
                      <div className="docebo-card-icon" style={{ background: prog.iconBg, color: prog.iconColor }}>
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div className="docebo-card-content">
                        <h4 className="docebo-card-title">{prog.title}</h4>
                        <p className="docebo-card-desc">{prog.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 2 (Center): Capabilities in 2 sub-columns */}
              <div className="docebo-col-capabilities">
                <h3 className="docebo-section-heading">Capabilities</h3>
                <div className="docebo-capabilities-grid">
                  <div className="docebo-subcol">
                    {capabilitiesCol1.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        className="docebo-capability-link"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="docebo-subcol">
                    {capabilitiesCol2.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        className="docebo-capability-link"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3 (Right): See Platform in Action Promo Panel */}
              <div className="docebo-col-action">
                <h3 className="docebo-action-heading">See the Platform in Action</h3>
                <p className="docebo-action-desc">
                  Discover how Docebo and OIAI transform learning experiences with intelligent courses and live cohorts.
                </p>

                <div className="docebo-action-box">
                  <div className="docebo-action-batch">
                    <span className="batch-dot" />
                    <span>Admissions 2026–27 Open</span>
                  </div>
                  <div className="docebo-action-buttons">
                    <a 
                      href="#courses" 
                      className="button button-cyan docebo-btn-primary"
                      onClick={handleLinkClick}
                    >
                      Explore All Programs <ArrowRight size={14} />
                    </a>
                    <button
                      type="button"
                      className="docebo-btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick();
                        if (onOpenEnroll) {
                          onOpenEnroll({
                            title: 'Book Free 1-on-1 AI Counselling',
                            subtitle: 'Personalized curriculum advice with Bhubaneswar campus mentors.'
                          });
                        }
                      }}
                    >
                      Book Free Counselling
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Item 2: Find AI Path with Career Down Option */}
        <div 
          className={`nav-dropdown-trigger-wrap ${activeDropdown === 'solutions' ? 'is-open' : ''}`}
          onMouseEnter={() => setActiveDropdown('solutions')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a 
            href="#find-path" 
            className="nav-link-btn"
            onClick={(e) => {
              if (window.innerWidth <= 900) {
                e.preventDefault();
                setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions');
              }
            }}
          >
            <span>Find AI Path</span>
            <ChevronDown size={14} className="dropdown-chevron" />
          </a>

          <div className="docebo-mega-dropdown">
            <div className="docebo-dropdown-inner">
              <div className="docebo-col-cards">
                <a href="#find-path" className="docebo-program-card" onClick={handleLinkClick}>
                  <div className="docebo-card-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                    <Sparkles size={20} />
                  </div>
                  <div className="docebo-card-content">
                    <h4 className="docebo-card-title">AI Engineer</h4>
                    <p className="docebo-card-desc">Design and deploy autonomous AI systems and inference pipelines.</p>
                  </div>
                </a>
                <a href="#find-path" className="docebo-program-card" onClick={handleLinkClick}>
                  <div className="docebo-card-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>
                    <BrainCircuit size={20} />
                  </div>
                  <div className="docebo-card-content">
                    <h4 className="docebo-card-title">Machine Learning Engineer</h4>
                    <p className="docebo-card-desc">Develop predictive models, feature stores & scalable ML architectures.</p>
                  </div>
                </a>
                <a href="#find-path" className="docebo-program-card" onClick={handleLinkClick}>
                  <div className="docebo-card-icon" style={{ background: '#d1fae5', color: '#059669' }}>
                    <BarChart3 size={20} />
                  </div>
                  <div className="docebo-card-content">
                    <h4 className="docebo-card-title">Data Scientist</h4>
                    <p className="docebo-card-desc">Transform raw data into predictive forecasting and strategic insights.</p>
                  </div>
                </a>
                <a href="#find-path" className="docebo-program-card" onClick={handleLinkClick}>
                  <div className="docebo-card-icon" style={{ background: '#ffedd5', color: '#ea580c' }}>
                    <Code2 size={20} />
                  </div>
                  <div className="docebo-card-content">
                    <h4 className="docebo-card-title">AgentHub Developer</h4>
                    <p className="docebo-card-desc">Build autonomous agents, multi-agent teams and enterprise automations.</p>
                  </div>
                </a>
              </div>

              <div className="docebo-col-capabilities">
                <h3 className="docebo-section-heading">Capabilities</h3>
                <div className="docebo-capabilities-grid">
                  <div className="docebo-subcol">
                    <a href="#find-path" className="docebo-capability-link" onClick={handleLinkClick}>Role Roadmap</a>
                    <a href="#find-path" className="docebo-capability-link" onClick={handleLinkClick}>Skills Evaluation</a>
                    <a href="#find-path" className="docebo-capability-link" onClick={handleLinkClick}>Career Transition</a>
                  </div>
                  <div className="docebo-subcol">
                    <a href="#internships" className="docebo-capability-link" onClick={handleLinkClick}>Internships</a>
                    <a href="#verification" className="docebo-capability-link" onClick={handleLinkClick}>Certification</a>
                    <a href="#assistant" className="docebo-capability-link" onClick={handleLinkClick}>AI Mentorship</a>
                  </div>
                </div>
              </div>

              <div className="docebo-col-action">
                <h3 className="docebo-action-heading">See the Platform in Action</h3>
                <p className="docebo-action-desc">
                  Discover how Docebo transforms learning experiences. Start your personalized path today.
                </p>
                <div className="docebo-action-box">
                  <a 
                    href="#course-finder" 
                    className="button button-cyan docebo-btn-primary"
                    onClick={handleLinkClick}
                  >
                    Take Career Quiz <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Direct Links */}
        <a href="#course-finder" className="nav-link-btn" onClick={handleLinkClick}>
          Course Finder
        </a>
        <a href="#internships" className="nav-link-btn" onClick={handleLinkClick}>
          Internships
        </a>
        <a href="#methodology" className="nav-link-btn" onClick={handleLinkClick}>
          Methodology
        </a>
        <a href="#verification" className="nav-link-btn" onClick={handleLinkClick}>
          Verify Certificate
        </a>
        <a href="#assistant" className="nav-link-btn" onClick={handleLinkClick}>
          AI Assistant
        </a>
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        <button 
          className="button button-cyan button-small" 
          onClick={() => onOpenEnroll && onOpenEnroll({ title: 'Admissions 2026-27', program: 'Generative AI & AI Agents' })}
          style={{ cursor: 'pointer', border: 0 }}
        >
          Enroll Now <ArrowUpRight size={15} />
        </button>
        <button 
          className="menu-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
