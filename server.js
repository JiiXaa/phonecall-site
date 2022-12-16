import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

const port = process.env.PORT || 5000;

// db and authenticate User
import connectDB from './db/connect.js';

// routes
import authRouter from './routes/authRoutes.js';

app.use(express.json());

app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // spins server up only if we are connected to the mongo db
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

// connect to the db and starts express
start();
