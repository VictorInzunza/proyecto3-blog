const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postServices.getAllPost)

router.post('/posts', postServices.postPost)

router.get('/posts/:id', postServices.getPostById)

router.patch('/posts/:id', postServices.patchPost)

router.delete('/posts/:id', postServices.deletePost)

module.exports = router