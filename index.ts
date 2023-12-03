import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const allowedOrigins = [
  process.env.LOCAL_FE || '',
  new RegExp(process.env.REVIEW_FE || ''),
  process.env.PROD_FE || ''
]

const createApp = (): Application => {
  const app: Application = express();

  //HERE THE PATHS ENABLED SHOULD BE MORE LIMITED
  app.use(cors({
    origin: allowedOrigins
  }));

  // Middleware to parse JSON requests
  app.use(express.json());

  const formInputRoutes = require('./routes/formInputsRoutes/formInputs-routes');

  // Use the formInputRoutes for /formInputs endpoint
  app.use('/formInputs', formInputRoutes);

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });

  return app;
};

const startServer = (app: Application, port: string | number): any => {
  const server = app.listen(port, () => {
    console.log(`Server is running at ${BASE_URL}`);
  });

  // Return the server instance
  return server;
};

const closeServer = (server: any): Promise<void> => {
  return new Promise<void>((resolve) => {
    server.close(() => {
      console.log('Server closed');
      resolve();
    });
  });
};

export { createApp, startServer, closeServer };