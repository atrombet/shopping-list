
import express from 'express';
import testRouter from './testRouter';

const router = express.Router();

// Main router entry point.

router.use('/test', testRouter);

export default router;
