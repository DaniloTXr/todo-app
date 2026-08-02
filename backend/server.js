import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connect to MongoDB`))
    .catch((err) => console.error(`Failed to connect to MongoDB:`, err));

app.get('/', (req, res) => {
    res.send('Server up!')
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
