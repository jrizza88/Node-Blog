
const express = require('express');

const postRoutes = require('./data/routes/postRoutes');
const userRoutes = require('./data/routes/userRoutes');


const server = express();

server.use(express.json());

// import routes from user and post
server.use('/api/posts', postRoutes)
server.use('/api/users', userRoutes)

server.get('/', (req, res) => {
	res.send(`
		Welcome to the Node-blog website!
		`)
})

server.get('*', (req, res) => {
	res.status(404).send(`
	An unknown error occured, please try again!
	`)
})

module.exports = server;