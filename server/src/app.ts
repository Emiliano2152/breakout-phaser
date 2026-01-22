import express, { type Request, type Response } from 'express';

const app = express();
const puerto = 3223;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

app.listen(puerto, () => {
  console.log(`Server is running at http://localhost:${puerto}`);
});
