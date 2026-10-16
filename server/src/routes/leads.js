import { Router } from 'express';

const router = Router();
const inMemoryLeads = [];

router.post('/', (req, res) => {
  const { name, mobile, email, city, qualification, occupation, program, mode, timing, objective, ctaSource } = req.body || {};
  
  if (!name || !mobile) {
    return res.status(400).json({ error: 'Name and mobile number are required.' });
  }

  const lead = {
    id: `OIAI-LEAD-${Date.now()}`,
    name: name.trim(),
    mobile: mobile.trim(),
    email: (email || '').trim(),
    city: city || 'Bhubaneswar',
    qualification: qualification || 'College Student',
    occupation: occupation || 'Student',
    program: program || 'Generative AI & AI Agents',
    mode: mode || 'Offline (Bhubaneswar)',
    timing: timing || 'Weekend Batch',
    objective: objective || 'AI Career',
    ctaSource: ctaSource || 'Website Form',
    status: 'New', // RD CRM Workflow: New -> Contacted -> Qualified -> Converted -> Lost
    assignedCounsellor: 'Bhubaneswar Academic Desk',
    createdAt: new Date().toISOString()
  };

  inMemoryLeads.unshift(lead);
  console.log(`[OIAI CRM] New lead received: ${lead.name} (${lead.mobile}) for ${lead.program}`);

  return res.status(201).json({
    success: true,
    message: 'Lead registered successfully. An OIAI counselor will reach out shortly.',
    leadId: lead.id
  });
});

router.get('/', (_req, res) => {
  return res.json({
    total: inMemoryLeads.length,
    leads: inMemoryLeads
  });
});

export default router;
