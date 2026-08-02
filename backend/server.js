import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connect to MongoDB`))
    .catch((err) => console.error(`Failed to connect to MongoDB:`, err));

app.get('/', (req, res) => {
    res.send('Server Up!')
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
