
const express = require('express');


const server = express();

server.use(express.json());

// import routes from user and post
// server.use('/', postRoutes)
//server.use('/', userRoutes)

server.get('/', (req, res) => {
	res.send(`
		Welcome to the Node-blog website!
		`)
})

module.exports = server;