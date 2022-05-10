import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCESSFULLY ON PORT ${PORT} !!!`);
});
