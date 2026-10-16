import { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Search, 
  Sparkles, 
  Clock3, 
  Calendar, 
  ArrowUpRight, 
  ArrowRight, 
  Compass, 
  Filter, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseSidebar({ 
  isOpen, 
  onClose, 
  courses = [], 
  onSelectCourse, 
  onEnroll,
  onOpenFinder 
}) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Lock body scroll when open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(['All']);
    courses.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return Array.from(set);
  }, [courses]);

  // Filter courses by search and category
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
      const q = search.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch = 
        c.title?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.category?.toLowerCase().includes(q) ||
        c.technologies?.some((t) => t.toLowerCase().includes(q)) ||
        c.modules?.some((m) => m.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [courses, selectedCategory, search]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="course-sidebar-overlay" onClick={onClose}>
          <motion.aside
            className="course-sidebar-drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            aria-label="AI Programs & Course Directory"
          >
            {/* Drawer Header */}
            <div className="sidebar-header">
              <div className="sidebar-header-title">
                <span className="sidebar-badge">
                  <Sparkles size={13} /> OIAI CURRICULUM
                </span>
                <h2>Explore AI Programs</h2>
                <p>Industry-aligned career tracks with live mentoring & internships</p>
              </div>
              <button 
                className="sidebar-close-btn" 
                onClick={onClose} 
                aria-label="Close courses sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="sidebar-search-wrap">
              <Search size={16} className="sidebar-search-icon" />
              <input 
                type="text" 
                placeholder="Search programs, tools (LangChain, PyTorch...)" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="sidebar-search-input"
              />
              {search && (
                <button 
                  className="sidebar-search-clear" 
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="sidebar-categories" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`sidebar-cat-chip ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                  {cat === 'All' && <span className="cat-count">{courses.length}</span>}
                </button>
              ))}
            </div>

            {/* Courses List */}
            <div className="sidebar-courses-scroll">
              <div className="sidebar-courses-count">
                Showing <b>{filteredCourses.length}</b> of {courses.length} AI programs
              </div>

              {filteredCourses.length === 0 ? (
                <div className="sidebar-empty-state">
                  <BookOpen size={36} color="var(--brand-cyan)" />
                  <h4>No matching programs found</h4>
                  <p>Try searching for a different keyword or reset filters.</p>
                  <button 
                    className="button button-cyan button-small" 
                    onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="sidebar-cards-grid">
                  {filteredCourses.map((course, idx) => (
                    <article key={course._id || course.id || course.title} className="sidebar-course-card">
                      {/* Top Badges */}
                      <div className="sidebar-card-top">
                        <span className="sidebar-card-category">{course.category}</span>
                        <div className="sidebar-card-pills">
                          <span className="sidebar-card-level">{course.level}</span>
                          <span className="sidebar-card-duration">
                            <Clock3 size={11} /> {course.duration}
                          </span>
                        </div>
                      </div>

                      {/* Course Title & Description */}
                      <h3 className="sidebar-card-title">{course.title}</h3>
                      <p className="sidebar-card-desc">{course.description}</p>

                      {/* Key Technologies Tags */}
                      {course.technologies && (
                        <div className="sidebar-card-tags">
                          {course.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="sidebar-card-tag">{tech}</span>
                          ))}
                          {course.technologies.length > 4 && (
                            <span className="sidebar-card-tag-more">+{course.technologies.length - 4}</span>
                          )}
                        </div>
                      )}

                      {/* Batch & Mode */}
                      <div className="sidebar-card-meta">
                        <div className="meta-item">
                          <Calendar size={12} color="var(--brand-cyan)" />
                          <span>Batch: <b>{course.nextBatch || 'Upcoming'}</b></span>
                        </div>
                        <span className="meta-mode">{course.mode || 'Campus + Live Online'}</span>
                      </div>

                      {/* Price & Action Buttons */}
                      <div className="sidebar-card-bottom">
                        <div className="sidebar-card-pricing">
                          <strong className="sidebar-price">{course.price}</strong>
                          {course.originalPrice && (
                            <span className="sidebar-original-price">{course.originalPrice}</span>
                          )}
                        </div>

                        <div className="sidebar-card-buttons">
                          <button
                            type="button"
                            className="sidebar-btn-details"
                            onClick={() => {
                              onClose();
                              onSelectCourse && onSelectCourse(course);
                            }}
                          >
                            Details
                          </button>
                          <button
                            type="button"
                            className="button button-cyan sidebar-btn-enroll"
                            onClick={() => {
                              onClose();
                              onEnroll && onEnroll({
                                title: `Enroll: ${course.title}`,
                                program: course.title
                              });
                            }}
                          >
                            Enroll <ArrowUpRight size={13} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Sticky Footer */}
            <div className="sidebar-footer">
              <div className="sidebar-footer-info">
                <span>Not sure which path fits your goals?</span>
                <small>Get recommendation in 60 seconds or speak with an advisor.</small>
              </div>
              <div className="sidebar-footer-actions">
                <button 
                  className="sidebar-footer-btn outline"
                  onClick={() => {
                    onClose();
                    if (onOpenFinder) onOpenFinder();
                    else {
                      const el = document.getElementById('course-finder');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Compass size={14} /> AI Course Finder
                </button>
                <button 
                  className="sidebar-footer-btn primary"
                  onClick={() => {
                    onClose();
                    onEnroll && onEnroll({
                      title: 'Book 1-on-1 AI Career Counselling',
                      subtitle: 'Personalized guidance from our Bhubaneswar campus faculty.'
                    });
                  }}
                >
                  Talk to Advisor <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
