import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const createApp = (): Application => {
  const app: Application = express();

  //HERE THE PATHS ENABLED SHOULD BE MORE LIMITED
  app.use(cors({
    origin: '*',
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
    console.log(`Server is running at http://localhost:${port}`);
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