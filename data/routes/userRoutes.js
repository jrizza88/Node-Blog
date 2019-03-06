
const express = require('express');

const router = express.Router();

const userDb = require('../helpers/userDb')

router.get('/', async (req, res) => {
    try {
        const users = await userDb.get(req.query)
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Could not render in the users"})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const oneUser = await userDb.getById(req.params.id);
        if (oneUser) {
            res.status(200).json(oneUser)
        } else {
            res.status(404).json({message: 'user does not exist'})
        }
    } catch (error) {
        res.status(500).json({error: 'error while retrieving user id'})
    }
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(404).send(`<h2> Names cannot be blank!</h2>`)
    }

    try {
        const user = req.body;
        const insertUser = await userDb.insert(user);
        if (insertUser) {
            res.status(201).json(insertUser)
        } 
    } catch (error) {
        res.status(500).send({error: 'error adding a new user'})
    }
});
module.exports = router;