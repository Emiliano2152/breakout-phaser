import express, { type Request, type Response } from 'express';
import { archivoHtml } from './index-de-emi';
import cors from 'cors';

const app = express();
const puerto = 3223;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.get('/ping', async (req: Request, res: Response) => {
  await delay(2000);
  res.send('Pong');
});

app.get('/archivo', (req: Request, res: Response) => {
  res.send(archivoHtml);
});

app.listen(puerto, () => {
  console.log(`Server is running at http://localhost:${puerto}`);
});
