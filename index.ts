import path from 'path';
// import dotenv from 'dotenv';
import express, { Express } from 'express';
import configureExpress from './src/server/express';

// dotenv.config();
import 'dotenv/config';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT) || 3000;

// Initialize an Express app.
const app: Express = express()
  .disable('x-powered-by')
  .use(express.urlencoded({ extended: true })) // Handle request parameters.
  .use(express.static('public')) // Serve static asset files.
  .set('views', path.join(__dirname, 'src/server/views'))
  .set('view engine', 'pug');

// Configure the app.
configureExpress(app);

// Run the server.
app.listen(PORT, HOST, () => {
  console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
});
