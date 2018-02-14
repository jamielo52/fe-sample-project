import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/'), bodyparser()));

const port = process.env.PORT || 3060;

app.listen(port, () =>
  console.log('Listening to port', port));
