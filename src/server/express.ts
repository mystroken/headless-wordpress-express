import { Express, Request, Response } from 'express';

/**
 * Express configurations.
 */
export default function (app: Express) {
  // First route.
  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
}
