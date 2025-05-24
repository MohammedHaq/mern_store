import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/products', (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log('Connected to MongoDB');
    console.log('Server is running on port 5000');
})

// ITFwQa9dOUb6CgIS