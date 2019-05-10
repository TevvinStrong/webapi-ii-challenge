const express = require('express');

const PostsRouter = require('./data/posts-router.js');

const server = express();

server.use(express.json());
server.use('/', PostsRouter);

// Test = works
// server.get('/', (req, res) => {
//    res.json('This is a test');
// });

module.exports = server;