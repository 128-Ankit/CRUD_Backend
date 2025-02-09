require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

connectDB();
app.listen(5000, () => console.log('Server running on port 5000'));
