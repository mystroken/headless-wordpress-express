import { Express, Request, Response } from 'express';

import blogRoutes from './routes/posts';

/**
 * Express configurations.
 */
export default function (app: Express) {

  // Registering routes.
  app.use('/blog', blogRoutes)

  // Fallback to 404.
  app.use((request: Request, response: Response) => {
    response.status(404)

    if (request.accepts('html')) {
      response.render('404', {
        url: request.url,
        error: '404 Not found',
        title: 'Page Not found',
        key: '404',
      })
      return
    }

    if (request.accepts('json')) {
      response.send({ error: 'Not Found' })
      return
    }

    response.type('txt').send('Not Found')
  })
}
