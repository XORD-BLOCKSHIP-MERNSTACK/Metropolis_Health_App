import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/error.js';
import authRoutes from './routes/auth.js';
import privateRoutes from './routes/private.js';

dotenv.config({ path: './config.env' });

// Connect Database
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/private', privateRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error ${err}`);
  server.close(() => process.exit(1));
});
