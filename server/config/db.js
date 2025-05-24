import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const mongoose = await import('mongoose');
        const conn = await mongoose.default.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}