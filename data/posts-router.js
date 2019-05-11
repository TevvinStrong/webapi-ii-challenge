const express = require('express');

const Posts = require('./db.js');

const router = express.Router();

//*** Routes ***\\

// Post
router.post('', (req, res) => {

});

// Get
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
        console.log(posts);
    } catch (error) {
        res.status(500).json({
            error: "Error retreving the posts",
        });
    }
});

// Get
router.get('', (req, res) => {

});

// Delete
router.delete('', (req, res) => {

});

// Put
router.put('', (req, res) => {

});


module.exports = router;