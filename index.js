require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
