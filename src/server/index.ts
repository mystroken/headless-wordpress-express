import dotenv from 'dotenv';
import path from "path"
import express, { Express } from 'express';
import configreExpress from "./express"

dotenv.config();

// Initialize an Express app.
const app: Express = express();
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

// Configure the app.
app.enable('trust proxy')
app.disable('x-powered-by')
app.set('views', path.join(__dirname, 'views'))
configreExpress(app);

// Run the server.
app.listen(port, host, () => {
  console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
});
