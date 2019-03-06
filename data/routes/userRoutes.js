
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


module.exports = router;