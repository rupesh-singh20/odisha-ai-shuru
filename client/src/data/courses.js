export const oiaiCategories = [
  { icon: 'BrainCircuit', name: 'Artificial Intelligence', num: '01', desc: 'Core intelligence, algorithms & neural systems' },
  { icon: 'Sparkles', name: 'Generative AI & LLMs', num: '02', desc: 'RAG, AI agents, LangChain & prompt engineering' },
  { icon: 'Code2', name: 'AI + Web Development', num: '03', desc: 'Full-stack apps powered by frontier models' },
  { icon: 'Rocket', name: 'Machine Learning', num: '04', desc: 'Supervised models, PyTorch & deep learning' },
  { icon: 'BookOpen', name: 'Data Science & Analytics', num: '05', desc: 'Data wrangling, SQL & predictive insights' }
];

export const heroTrustBadges = [
  { label: 'Practical Learning', icon: 'Code' },
  { label: 'Live Projects', icon: 'Rocket' },
  { label: 'Industry Mentorship', icon: 'Users' },
  { label: 'Internship Opportunities', icon: 'Briefcase' },
  { label: 'Career Support', icon: 'Award' }
];

export const aiRoles = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    badge: 'High Demand',
    desc: 'Design, build, and deploy intelligent autonomous systems and AI pipelines.',
    salary: '₹8 - 25 LPA',
    skills: ['Python', 'Deep Learning', 'PyTorch', 'REST APIs', 'Cloud AI'],
    recommendedCourse: 'Generative AI & AI Agents Masterclass'
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    badge: 'Core Track',
    desc: 'Develop predictive models, feature engineering pipelines, and scalable ML architectures.',
    salary: '₹7 - 22 LPA',
    skills: ['Scikit-learn', 'TensorFlow', 'MLOps', 'Feature Stores', 'Docker'],
    recommendedCourse: 'Machine Learning & Deep Learning Specialization'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    badge: 'Popular',
    desc: 'Transform raw institutional data into predictive forecasting and strategic insights.',
    salary: '₹6.5 - 20 LPA',
    skills: ['Python', 'SQL', 'Pandas', 'Statistics', 'PowerBI'],
    recommendedCourse: 'Data Science & Big Data Analytics'
  },
  {
    id: 'genai-dev',
    title: 'Generative AI Developer',
    badge: 'Frontier 2026',
    desc: 'Build RAG pipelines, multi-agent systems, and specialized LLM applications.',
    salary: '₹9 - 28 LPA',
    skills: ['LLMs', 'LangChain', 'LlamaIndex', 'Vector DBs', 'Fine-tuning'],
    recommendedCourse: 'Generative AI & AI Agents Masterclass'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Specialist',
    badge: 'Business Ready',
    desc: 'Automate business workflows using autonomous AI agents and enterprise integrations.',
    salary: '₹6 - 18 LPA',
    skills: ['n8n', 'Make', 'AI Agents', 'Zapier', 'Python APIs'],
    recommendedCourse: 'AI Automation & Intelligent Workflows'
  },
  {
    id: 'prompt-engineer',
    title: 'Prompt Engineer',
    badge: 'Fast Track',
    desc: 'Craft optimal model directives, multi-modal prompt systems, and few-shot frameworks.',
    salary: '₹5 - 15 LPA',
    skills: ['Claude', 'GPT-4o', 'Context Tuning', 'Evaluation', 'Prompt Chaining'],
    recommendedCourse: 'Prompt Engineering & Generative Tools'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    badge: 'Entry Level',
    desc: 'Uncover patterns, clean datasets, and build executive intelligence dashboards.',
    salary: '₹4.5 - 12 LPA',
    skills: ['Excel', 'SQL', 'Tableau', 'EDA', 'Python'],
    recommendedCourse: 'Data Science & Big Data Analytics'
  },
  {
    id: 'ai-pm',
    title: 'AI Product Manager',
    badge: 'Leadership',
    desc: 'Bridge technical AI engineering with commercial strategy and user value delivery.',
    salary: '₹12 - 32 LPA',
    skills: ['AI Product Lifecycle', 'AI Ethics', 'Roadmapping', 'User Research'],
    recommendedCourse: 'AI for Working Professionals & Business Leaders'
  },
  {
    id: 'ai-researcher',
    title: 'AI Researcher',
    badge: 'Advanced',
    desc: 'Push state-of-the-art architectures in computer vision, reasoning, and NLP.',
    salary: '₹10 - 30 LPA',
    skills: ['Math & Linear Algebra', 'PyTorch', 'Paper Implementation', 'ArXiv'],
    recommendedCourse: 'Machine Learning & Deep Learning Specialization'
  },
  {
    id: 'ai-entrepreneur',
    title: 'AI Entrepreneur',
    badge: 'Founder Track',
    desc: 'Launch AI-native micro-SaaS and automate modern business ventures in Odisha and beyond.',
    salary: 'Limitless',
    skills: ['Rapid Prototyping', 'Full-stack AI', 'GTM Strategy', 'API Monetization'],
    recommendedCourse: 'Full-Stack AI & Intelligent Web Apps'
  }
];

export const courses = [
  {
    id: 'genai-agents',
    category: 'GENERATIVE AI',
    title: 'Generative AI & AI Agents',
    description: 'Master LLMs, Prompt Engineering, RAG, Autonomous AI Agents, LangChain and production AI workflows.',
    level: 'Beginner to Advanced',
    duration: '3 / 6 months',
    mode: 'Offline (Bhubaneswar) / Online Live',
    price: '₹18,500',
    originalPrice: '₹26,000',
    nextBatch: '25th Oct 2026',
    seatsLeft: 8,
    internship: 'Guaranteed 2-Month Project Internship',
    cert: 'OIAI Industry Certified',
    technologies: ['LLMs', 'Prompt Engineering', 'RAG', 'AI Agents', 'LangChain', 'Vector DBs', 'APIs'],
    modules: [
      'Foundations of Generative Models & LLMs',
      'Advanced Prompt Engineering & Reasoning Chains',
      'Retrieval Augmented Generation (RAG) Architecture',
      'Multi-Agent Frameworks with LangChain & CrewAI',
      'Building Production AI APIs & Full-Stack Deployment'
    ],
    visual: 'brain'
  },
  {
    id: 'ml-deep-learning',
    category: 'MACHINE LEARNING',
    title: 'Machine Learning & Deep Learning',
    description: 'From mathematical intuition to training convolutional networks, NLP transformers, and real-world predictive models.',
    level: 'Beginner to Intermediate',
    duration: '4 / 6 months',
    mode: 'Offline (Bhubaneswar) / Hybrid',
    price: '₹16,500',
    originalPrice: '₹24,000',
    nextBatch: '1st Nov 2026',
    seatsLeft: 6,
    internship: 'Live Research & Industry Project',
    cert: 'OIAI Machine Learning Specialist',
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'OpenCV', 'Hugging Face', 'NumPy'],
    modules: [
      'Python for Data Science & Linear Algebra',
      'Supervised & Unsupervised Machine Learning',
      'Deep Neural Networks & Backpropagation',
      'Computer Vision with Convolutional Networks',
      'Natural Language Processing & Transformer Models'
    ],
    visual: 'network'
  },
  {
    id: 'fullstack-ai-web',
    category: 'AI + WEB',
    title: 'Full-Stack AI & Intelligent Web Apps',
    description: 'Bridge modern frontend interfaces with state-of-the-art AI inference pipelines, vector databases, and cloud backends.',
    level: 'Intermediate',
    duration: '4 months',
    mode: 'Online Live & Interactive Labs',
    price: '₹15,000',
    originalPrice: '₹22,000',
    nextBatch: '28th Oct 2026',
    seatsLeft: 10,
    internship: 'Live Product Internship',
    cert: 'OIAI Full-Stack AI Engineer',
    technologies: ['React', 'FastAPI', 'Node.js', 'Vector DB', 'OpenAI API', 'TailwindCSS'],
    modules: [
      'Modern Reactive Web Interfaces (React & Vite)',
      'High-Performance Async AI APIs with FastAPI',
      'Semantic Search with Pinecone & ChromaDB',
      'Streaming Responses & Real-Time AI Chat Interfaces',
      'Cloud Deployment & Monitoring'
    ],
    visual: 'code'
  },
  {
    id: 'data-science-analytics',
    category: 'DATA SCIENCE',
    title: 'Data Science & Big Data Analytics',
    description: 'Master data exploration, statistical modeling, SQL querying, and executive visualization to solve real business challenges.',
    level: 'Beginner to Intermediate',
    duration: '3 / 5 months',
    mode: 'Offline (Bhubaneswar) / Online',
    price: '₹14,500',
    originalPrice: '₹20,000',
    nextBatch: '5th Nov 2026',
    seatsLeft: 12,
    internship: 'Corporate Data Analyst Internship',
    cert: 'OIAI Data Science Professional',
    technologies: ['Python', 'SQL', 'Pandas', 'PowerBI', 'Tableau', 'Statistical Modeling'],
    modules: [
      'Enterprise SQL & Database Architecture',
      'Exploratory Data Analysis with Pandas & Seaborn',
      'Hypothesis Testing & Statistical Inference',
      'Predictive Modeling & Feature Engineering',
      'Executive Dashboards with PowerBI & Storytelling'
    ],
    visual: 'data'
  },
  {
    id: 'ai-automation-workflows',
    category: 'AI AUTOMATION',
    title: 'AI Automation & Autonomous Workflows',
    description: 'Build no-code and low-code autonomous workflows connecting CRM, email, social media, and internal databases with AI.',
    level: 'All Levels',
    duration: '2 months',
    mode: 'Hybrid (Weekend Batches)',
    price: '₹11,500',
    originalPrice: '₹16,000',
    nextBatch: '10th Nov 2026',
    seatsLeft: 9,
    internship: 'Business Process Automation Project',
    cert: 'OIAI Automation Specialist',
    technologies: ['n8n', 'Make.com', 'Zapier', 'Python APIs', 'Webhooks', 'OpenAI'],
    modules: [
      'Autonomous Workflow Fundamentals',
      'Multi-Tool Orchestration with n8n & Make',
      'Automated Lead Qualification & CRM Sync',
      'Document Parsing & Automated Summarization',
      'Deploying Self-Healing AI Workflows'
    ],
    visual: 'code'
  },
  {
    id: 'prompt-engineering-tools',
    category: 'PROMPT ENGINEERING',
    title: 'Prompt Engineering & Generative Tools',
    description: 'Learn frontier prompting techniques, context caching, multi-modal generation, and model steering for peak productivity.',
    level: 'Beginner',
    duration: '6 weeks',
    mode: 'Online Live & Hands-on Labs',
    price: '₹7,500',
    originalPrice: '₹12,000',
    nextBatch: '20th Oct 2026',
    seatsLeft: 15,
    internship: 'Creator & Enterprise Tool Projects',
    cert: 'OIAI Certified Prompt Engineer',
    technologies: ['GPT-4o', 'Claude 3.5', 'Midjourney', 'Cursor', 'Perplexity'],
    modules: [
      'Cognitive Prompting & Chain-of-Thought Patterns',
      'Few-Shot Prompting & Negative Constraints',
      'System Prompt Architecture for Enterprise',
      'Multi-Modal Generation (Images, Audio, Video)',
      'AI-Assisted Coding & Accelerated Workflow'
    ],
    visual: 'brain'
  }
];

export const paths = [
  { 
    number: '01', 
    title: 'AI Foundations to Deep Learning', 
    subtitle: 'From core Python and mathematics to neural network architectures.', 
    count: '3 Programs', 
    symbol: '✳' 
  },
  { 
    number: '02', 
    title: 'Generative AI & Agentic Systems', 
    subtitle: 'Build intelligent autonomous agents, RAG workflows, and LLM apps.', 
    count: '4 Programs', 
    symbol: '⌘' 
  },
  { 
    number: '03', 
    title: 'Data Science & Enterprise Analytics', 
    subtitle: 'Turn unstructured institutional data into actionable intelligence.', 
    count: '3 Programs', 
    symbol: '↗' 
  },
  { 
    number: '04', 
    title: 'Industry Internships & Career Launch', 
    subtitle: 'Live company projects, portfolio building, and job interview placement.', 
    count: '10 Tracks', 
    symbol: '⚡' 
  }
];

export const learningMethodology = [
  { stage: 'Stage 1', name: 'Learn Fundamentals', desc: 'Core theory, mathematical intuition, and foundational programming.' },
  { stage: 'Stage 2', name: 'Practice with AI Tools', desc: 'Hands-on practice in cloud notebooks and state-of-the-art AI IDEs.' },
  { stage: 'Stage 3', name: 'Build Projects', desc: 'Create functional prototypes that solve real business and civic problems.' },
  { stage: 'Stage 4', name: 'Real-World Assignments', desc: 'Industry-grade challenges reviewed by experienced senior practitioners.' },
  { stage: 'Stage 5', name: 'Complete Internship', desc: 'Work on verified capstone initiatives with mentor guidance in Bhubaneswar.' },
  { stage: 'Stage 6', name: 'Build Portfolio', desc: 'Deploy live web demos, GitHub repos, and write technical case studies.' },
  { stage: 'Stage 7', name: 'Get Career Ready', desc: 'Resume tuning, mock interviews, AI portfolio reviews & hiring connects.' }
];

export const roadmapSteps = [
  'Programming Fundamentals',
  'Python for AI & Data',
  'Data Wrangling & SQL',
  'Machine Learning Foundations',
  'Deep Learning & Neural Nets',
  'Generative AI & RAG',
  'Autonomous AI Agents',
  'Live Capstone Projects',
  'Industry Internship',
  'Portfolio & GitHub Showcase',
  'Mock Technical Interviews',
  'High-Growth AI Career'
];

export const whyChooseOIAI = [
  {
    num: '01',
    title: 'AI-First Curriculum',
    desc: 'Curriculum designed from the ground up around current and emerging 2026 AI technologies, not dated legacy computer syllabi.'
  },
  {
    num: '02',
    title: 'Hands-On Projects',
    desc: 'Students build real, deployable projects rather than only studying abstract theory. Every student graduates with a live portfolio.'
  },
  {
    num: '03',
    title: 'Industry Mentorship',
    desc: 'Learn directly from experienced AI practitioners, researchers, and engineers working with frontier machine learning models.'
  },
  {
    num: '04',
    title: 'Internship Opportunities',
    desc: 'Practical exposure through structured internships, live client assignments, and genuine industry exposure in Bhubaneswar & remote.'
  },
  {
    num: '05',
    title: 'Career Preparation',
    desc: 'Comprehensive resume optimization, GitHub curation, mock interviews, and direct networking with top hiring partners.'
  },
  {
    num: '06',
    title: 'Flexible Learning',
    desc: 'Choose between Bhubaneswar classroom sessions, live interactive online classes, hybrid cohorts, and intensive weekend bootcamps.'
  }
];

export const internshipTracks = [
  { name: 'Generative AI & Agents', duration: '3-6 Months', eligibility: 'Knowledge of Python & APIs', openings: '15 Seats' },
  { name: 'Python for AI', duration: '2-3 Months', eligibility: 'Beginners & college students', openings: '20 Seats' },
  { name: 'Machine Learning', duration: '3-6 Months', eligibility: 'Python, basic math & stats', openings: '12 Seats' },
  { name: 'Data Science & SQL', duration: '3-4 Months', eligibility: 'Graduates & college students', openings: '14 Seats' },
  { name: 'Computer Vision & NLP', duration: '3-6 Months', eligibility: 'PyTorch/TensorFlow basics', openings: '8 Seats' },
  { name: 'AI Workflow Automation', duration: '2-4 Months', eligibility: 'Open to all backgrounds', openings: '10 Seats' }
];

export const studentProjects = [
  {
    id: 1,
    title: 'Odisha Agritech AI Advisory Engine',
    category: 'Generative AI',
    problem: 'Farmers across coastal Odisha struggle with localized crop pest identification and weather risk advisory.',
    technology: 'Claude 3.5, LangChain, Odia language vector store, FastAPI, React',
    solution: 'Built a multi-modal voice & photo advisory bot providing real-time recommendations in Odia and English.',
    result: 'Tested across 450+ farming queries with 94% advisory relevance and sub-second voice latency.',
    student: 'Subhashree Mohapatra (B.Tech, CET Bhubaneswar)'
  },
  {
    id: 2,
    title: 'Smart Medical Report Diagnostics Interpreter',
    category: 'Computer Vision',
    problem: 'Patients and rural clinics face delays in deciphering complex pathology and radiology scan indicators.',
    technology: 'PyTorch, ResNet-50, Vision Transformer, Python, Docker',
    solution: 'Trained a localized anomaly detection model highlighting diagnostic indicators for physician review.',
    result: 'Reduced initial triage turnaround from 4 hours to under 3 minutes in prototype trials.',
    student: 'Aman Pattnaik (Graduate, Utkal University)'
  },
  {
    id: 3,
    title: 'Autonomous Bhubaneswar E-Governance Agent',
    category: 'AI Agents',
    problem: 'Citizens experience friction navigating civic municipal grievance portals and status updates.',
    technology: 'CrewAI, Llama 3, ChromaDB, WhatsApp Business API',
    solution: 'Constructed an autonomous triage agent handling citizen queries, routing tickets, and sending automated progress pings.',
    result: 'Handled 2,000+ simulated municipal inquiries with zero dropped escalations.',
    student: 'Priyanka Dash & Rakesh Jena (OIAI Batch 2026)'
  }
];

export const studentSuccessStories = [
  {
    name: 'Debashis Mishra',
    role: 'Associate AI Engineer at Tech Mahindra',
    before: 'Non-CS Graduate with zero coding experience',
    learned: 'Python, Machine Learning, RAG & LLMs at OIAI',
    project: 'Local Tourism Recommendation Engine for Odisha',
    internship: '3-Month Industry Internship at OIAI Labs',
    outcome: 'Secured AI Engineer offer with 140% salary hike in Bhubaneswar'
  },
  {
    name: 'Swati Sucharita Sahoo',
    role: 'Generative AI Specialist at Enterprise SaaS',
    before: 'Junior Web Developer looking to transition',
    learned: 'LangChain, Autonomous AI Agents, Prompt Engineering',
    project: 'Automated Legal Document Summarizer',
    internship: 'Full-stack AI Internship',
    outcome: 'Selected for specialized AI developer role at ₹12 LPA package'
  }
];

export const upcomingWorkshops = [
  {
    id: 'ws-1',
    title: 'AI Career Workshop: From Computer Science Student to AI Engineer',
    date: 'Saturday, 24th Oct 2026',
    time: '10:00 AM – 1:00 PM IST',
    venue: 'OIAI Bhubaneswar Campus & Live Stream',
    speaker: 'Er. Alok Ranjan (Principal AI Architect, Ex-TCS Innovation Labs)',
    topic: 'Roadmap to cracking high-paying AI & Generative AI roles in 2026–27',
    seats: '45 Seats Remaining',
    price: 'Free with Registration',
    certificate: 'Workshop Certificate Provided'
  },
  {
    id: 'ws-2',
    title: 'Hands-on Generative AI & Autonomous Agents Bootcamp',
    date: 'Sunday, 1st Nov 2026',
    time: '2:00 PM – 6:00 PM IST',
    venue: 'Live Interactive Virtual Lab',
    speaker: 'Dr. Smruti Rekha Biswal (AI Researcher & Consultant)',
    topic: 'Build and deploy your first Multi-Agent Crew in 4 hours',
    seats: '30 Seats Remaining',
    price: 'Free with Registration',
    certificate: 'Hands-on Bootcamp Badge'
  }
];

export const demoCertificates = {
  'OIAI-2026-AI892': {
    studentName: 'Subhashree Mohapatra',
    program: 'Generative AI & AI Agents Masterclass',
    issueDate: 'October 2, 2026',
    status: 'Verified & Authentic',
    grade: 'Distinction (A+)',
    credentialId: 'OIAI-2026-AI892',
    center: 'OIAI Bhubaneswar Campus'
  },
  'OIAI-2026-ML410': {
    studentName: 'Debashis Mishra',
    program: 'Machine Learning & Deep Learning Specialization',
    issueDate: 'September 15, 2026',
    status: 'Verified & Authentic',
    grade: 'Excellence (A)',
    credentialId: 'OIAI-2026-ML410',
    center: 'OIAI Bhubaneswar Campus'
  },
  'OIAI-2026-DS321': {
    studentName: 'Swati Sucharita Sahoo',
    program: 'Data Science & Big Data Analytics',
    issueDate: 'August 28, 2026',
    status: 'Verified & Authentic',
    grade: 'Distinction (A+)',
    credentialId: 'OIAI-2026-DS321',
    center: 'OIAI Online Academy'
  }
};

export const faqs = [
  {
    q: 'What is the best AI institute in Bhubaneswar?',
    a: 'Odisha Institute of Artificial Intelligence (OIAI) is Bhubaneswar’s premier AI-first training and career institute. Unlike generic coaching centers, OIAI focuses exclusively on modern AI technologies—including Generative AI, LLMs, AI Agents, Machine Learning, and Data Science—backed by hands-on real-world projects, live internships, and dedicated career guidance.'
  },
  {
    q: 'Which AI course is best for beginners?',
    a: 'For beginners without prior coding experience, we recommend our "AI Foundations & Prompt Engineering" or "Data Science & Analytics". For those with basic computer familiarity, "Generative AI & AI Agents" provides the fastest route to building impactful AI applications.'
  },
  {
    q: 'How can I become an AI engineer in Odisha?',
    a: 'Follow the OIAI 7-stage learning journey: Master Python & Data → Understand Machine Learning algorithms → Learn Deep Learning & Generative AI → Build autonomous AI agents → Complete a 3-month project internship → Build a portfolio with live URLs → Prepare for technical interviews with OIAI career advisors.'
  },
  {
    q: 'What AI course should a B.Tech student choose?',
    a: 'B.Tech students (CSE, IT, ECE, Electrical, Mechanical) gain the highest career leverage from our "Generative AI & AI Agents Masterclass" and "Machine Learning & Deep Learning Specialization". Both tracks include live capstone projects and mandatory project internships that fulfill college academic requirements while preparing you for industry placements.'
  },
  {
    q: 'Can non-programmers learn AI?',
    a: 'Yes, absolutely. AI tooling in 2026 has opened up significant roles for non-programmers, including AI Automation Specialist, Prompt Engineer, AI Product Manager, and AI Business Consultant. Our beginner modules start with zero assumptions and build practical competency step-by-step.'
  },
  {
    q: 'Where can I learn AI offline in Bhubaneswar?',
    a: 'OIAI offers in-person classroom and lab cohorts at our Bhubaneswar center equipped with high-speed GPU workstations, mentor desks, and collaboration spaces, alongside hybrid and online options for learners across Odisha and globally.'
  }
];
