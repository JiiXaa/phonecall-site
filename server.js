import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

// routes
import authRouter from './routes/authRoutes.js';

app.use(express.json());

app.use('/api/auth', authRouter);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
start();
