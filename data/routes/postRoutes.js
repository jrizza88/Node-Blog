
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




module.exports = router;