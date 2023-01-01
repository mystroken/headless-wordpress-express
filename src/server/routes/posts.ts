import express, { Router } from 'express';

import { getWpPosts, getWpPost } from '../controllers/posts'

const router: Router = express.Router()

router
  .get('/', async (req, res) => {
    try {
      // res.render('blog', { posts: await getWpPosts() })
      const posts = await getWpPosts();
      console.log(posts)
    } catch (e: any) {
      throw new Error(e)
    }
  })
  .get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params
      const postToRender = await getWpPost(slug)

      res.render('post', postToRender)
    } catch (e: any) {
      throw new Error(e)
    }
  })

export default router
