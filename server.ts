import express, { Application } from 'express';

import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
  .listen(PORT, 'localhost', () => {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on('error', (error: any) => {
    if (error.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(error);
    }
  });
