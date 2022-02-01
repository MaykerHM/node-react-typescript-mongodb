import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof Error) {
    return response.status(400).json({
      message: error.message
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error}`
  });
});
