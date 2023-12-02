import { createApp, startServer } from './index';

const port = process.env.PORT || 8000;

const app = createApp();
startServer(app, port);
