import { createApp, startServer } from './index';

const port = process.env.PORT || 3000;

const app = createApp();
startServer(app, port);
