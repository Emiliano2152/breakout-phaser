import express, { type Request, type Response } from 'express';
import { archivoHtml } from './index-de-emi';

const app = express();
const port = 3223;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong');
});

app.get('/archivo', (req: Request, res: Response) => {
  res.send(archivoHtml);
});

/*
insomnia -> POST with BODY "rock" / "paper" / "scissors"

POST /rps :
- validacion del input del usuario
- crear un resultado de la maquina random
- compara con el del usuario
- retorna string "Ganaste" / "Perdiste" / "Empate"
*/

// Middleware to parse JSON bodies

// Route to handle POST requests to '/src'
app.post('/rps', (req, res) => {
  let incomingData = req.body;
  // Validación
  if (incomingData['move'] === undefined) {
    res.status(400).json('Poné bien move culiado');
    return;
  }
  // TODO: validación de que move sea "rock", "paper" o "scisors"

  // Lógica
  console.log(incomingData['move']);

  // Send a response back to the client, typically with a 201 status code for resource creation
  res.status(201).json({
    message: 'Data received successfully',
    data: incomingData,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
