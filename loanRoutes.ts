import { Router, Request, Response } from 'express';
import { Loan } from '../models/Loan';

const router = Router();

// POST route to submit a loan application
router.post('/apply', async (req: Request, res: Response) => {
  const { userId, loanAmount } = req.body;

  try {
    const newLoan = new Loan({ userId, loanAmount });
    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit loan application' });
  }
});

export default router;
