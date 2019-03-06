
const express = require('express');

const postDb = require('../helpers/postDb');


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const posts = await postDb.get(req.query)
        res.status(200).json(posts)
    } 
    catch (error) {
        console.error(error)
        res.status(500).json({error: "The posts could not be rendered"})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const posts = await postDb.getById(req.params.id)
        if (posts) {
            res.status(200).json(posts)
        } else {
            res.status(404).send(`<h1>The post you searched for does not exist</h1>`)
        }
    } catch {
        res.status(500).json({error: 'id resource not found'})
    }
})

router.post('/', async (req, res) => {
const {text, user_id} = req.body
if (!text || !user_id) {
    res.status(404).send(`<h2> You did not enter either text or an user_id number! You must enter both to post </h2>`)
}
    try {
        const post = req.body;
        console.log(post)
        const insertPost = await postDb.insert(post)
        if (insertPost) {
            res.status(201).json(insertPost)
        }
    } catch {
        res.status(500).json({error: 'There was an error while inserting the post into the database'})
    }
})



module.exports = router;