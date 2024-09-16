import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Loan Manager Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import mongoose from 'mongoose';

const dbURI = 'your-mongodb-uri'; // Replace with your MongoDB URI

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));
  
  import loanRoutes from './routes/loanRoutes';

  app.use('/api/loans', loanRoutes);
  