import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import ErrorHandler from './middlewares/ErrorHandler';
import 'babel-polyfill';
import apiRoutes from './routes';


config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(ErrorHandler.sendError);
app.use('/api', apiRoutes);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening from port ${port}`);
});

export default app;
