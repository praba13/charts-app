import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.get('/', (req, res) => {
  res.send('Data');
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCESSFULLY ON PORT ${PORT} !!!`);
});
