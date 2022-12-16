import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.set('strictQuery', false), mongoose.connect(url);
};

export default connectDB;
