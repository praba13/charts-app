import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const data = [
  {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Oktober',
      'Novenmber',
      'December'
    ],
    data: [
      {
        values: [50, 150, 130, 50, 20, 50, 300, 200, 150, 50, 100, 30]
      },
      {
        values: [135, -25, 135, 140, 100, -200, -100, 200, 75, 110, 120, 100]
      }
    ]
  }
];

app.get('/data', (req, res) => {
  //res.send('Data');
  res.json(data);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCESSFULLY ON PORT ${PORT} !!!`);
});
