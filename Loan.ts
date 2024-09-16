import mongoose, { Schema, Document } from 'mongoose';

interface ILoan extends Document {
  userId: string;
  loanAmount: number;
  status: string;
}

const LoanSchema: Schema = new Schema({
  userId: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
});

export const Loan = mongoose.model<ILoan>('Loan', LoanSchema);
