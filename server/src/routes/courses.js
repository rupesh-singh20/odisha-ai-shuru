import { Router } from 'express';
import Course from '../models/Course.js';
import { demoCourses } from '../data/demoCourses.js';

const router = Router();

router.get('/', async (_req, res) => {
  if (Course.db.readyState === 1) {
    try {
      const courses = await Course.find({ published: true }).sort({ createdAt: -1 }).lean();
      if (courses.length) return res.json(courses);
    } catch (error) {
      console.error('Course query failed:', error.message);
    }
  }
  return res.json(demoCourses);
});

export default router;
