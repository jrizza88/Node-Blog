
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const postRoutes = require('./data/routes/postRoutes');
const userRoutes = require('./data/routes/userRoutes');

const server = express();
const parser = express.json();
const logMiddleware = logger('dev');
const securityMiddleware = helmet();



server.use(parser, logMiddleware, securityMiddleware);

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
	<h2>An unknown error occured, please try again!</h2>
	`)
})

module.exports = server;