import express, { Router } from 'express';

import { getWpPosts, getWpPost } from '../controllers/posts'

const router: Router = express.Router()

router
  .get('/', async (req, res) => {
    try {
      res.render('posts/all', { posts: await getWpPosts() })
    } catch (e: any) {
      throw new Error(e)
    }
  })
  .get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params
      const postToRender = await getWpPost(slug)

      res.render('posts/show', postToRender)
    } catch (e: any) {
      throw new Error(e)
    }
  })

export default router
