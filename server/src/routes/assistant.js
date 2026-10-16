import { Router } from 'express';

const router = Router();

function demoReply(message) {
  const lower = message.toLowerCase();

  if (lower.includes('bhubaneswar') || lower.includes('location') || lower.includes('offline') || lower.includes('campus')) {
    return 'OIAI’s state-of-the-art campus is situated in Bhubaneswar, Odisha, featuring dedicated AI development labs, high-performance GPU workstations, and collaborative project rooms. We also conduct interactive live-streamed online cohorts for learners across India and abroad.';
  }

  if (lower.includes('fee') || lower.includes('cost') || lower.includes('price') || lower.includes('emi')) {
    return 'OIAI course fees range from ₹7,500 (Prompt Engineering 6-week bootcamp) to ₹18,500 (Generative AI & Autonomous Agents 3/6-month Masterclass). We provide easy 0% interest EMI options starting at ₹2,500/month, as well as merit scholarships for top college students in Odisha.';
  }

  if (lower.includes('internship') || lower.includes('intern')) {
    return 'All 4+ month professional programs at OIAI include a guaranteed 2 to 3-month project internship. Interns work on live civic, industrial, and AI application datasets under the mentorship of senior machine learning practitioners, and receive an official verifiable OIAI Internship Certificate.';
  }

  if (lower.includes('course') || lower.includes('program') || lower.includes('learn')) {
    return 'OIAI offers 6 core tracks: 1) Generative AI & AI Agents, 2) Machine Learning & Deep Learning, 3) Full-Stack AI & Intelligent Web Apps, 4) Data Science & Big Data Analytics, 5) AI Automation & Autonomous Workflows, and 6) Prompt Engineering. Use our interactive Course Finder on the homepage to find your best fit.';
  }

  if (lower.includes('workshop') || lower.includes('event')) {
    return 'Join our upcoming "AI Career Workshop: From Computer Science Student to AI Engineer" in Bhubaneswar and online. It covers practical skill roadmaps, project portfolios, and interview frameworks for 2026-27 AI roles.';
  }

  if (lower.includes('project') || lower.includes('idea')) {
    return 'OIAI students build production-grade projects like localized agricultural advisory agents in Odia, automated medical report diagnostics with Vision Transformers, and autonomous municipal grievance bots with CrewAI and vector databases.';
  }

  if (lower.includes('verify') || lower.includes('certificate')) {
    return 'You can verify any OIAI credential directly on our website using our Certificate Verification Portal. Simply enter the Certificate ID (e.g. OIAI-2026-AI892) to view student details, grade, issue date, and issuing center.';
  }

  if (lower.includes('plan') || lower.includes('roadmap') || lower.includes('career')) {
    return 'The OIAI AI Career Roadmap: Programming Basics → Python for AI → Data & SQL → Machine Learning Foundations → Deep Learning & Neural Nets → Generative AI & RAG → Autonomous AI Agents → Capstone Projects → Industry Internship → Live Portfolio → Technical Interview Preparation.';
  }

  return `Welcome to the Odisha Institute of Artificial Intelligence (OIAI). Regarding "${message}": we are committed to providing hands-on AI education, industry internships, and career placement support from Bhubaneswar. You can book a free counselling session or reach us on WhatsApp at +91 94370 00000.`;
}

router.post('/', (req, res) => {
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  if (!message) return res.status(400).json({ error: 'Please provide a message.' });
  if (message.length > 1500) return res.status(413).json({ error: 'Message is too long. Keep it under 1500 characters.' });
  return res.json({ reply: demoReply(message), mode: 'oiai-knowledge-base' });
});

export default router;
