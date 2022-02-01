import express, { Express } from 'express';
import 'dotenv/config';
import { setupRoutes } from './Routes';

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupRoutes(app);
  return app;
};
