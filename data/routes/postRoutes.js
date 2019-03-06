
const express = require('express');

const postDb = require('../helpers/postDb');


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        console.log('query', req.query)
        const posts = await postDb.get(req.query)
        res.status(200).json(posts)
    } 
    catch (err) {
        console.error(err)
        res.status(500).json({error: "The posts could not be rendered"})
    }
})


module.exports = router;