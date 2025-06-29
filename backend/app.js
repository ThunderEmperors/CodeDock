const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const snippetRoutes = require('./routes/snippets.routes');
const { errorHandler } = require('./middleware/error');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/snippets', snippetRoutes);

app.use(errorHandler);

module.exports = app;
