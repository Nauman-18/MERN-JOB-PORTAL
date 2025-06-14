import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGO_URL);  // Debugging line
        await mongoose.connect("mongodb://127.0.0.1:27017/JOB", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mongodb connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectDB;
