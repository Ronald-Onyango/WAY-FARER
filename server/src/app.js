import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import apiRoutes from './routes';
import bodyParser from 'body-parser';
import 'babel-polyfill';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', apiRoutes);
app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});

export default app;
