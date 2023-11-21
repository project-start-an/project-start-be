import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

const formInputRoutes = require('./routes/formInputs-routes');

// Use the formInputRoutes for /formInputs endpoint
app.use('/formInputs', formInputRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
