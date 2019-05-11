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
        //console.log(posts);
    } catch (error) {
        res.status(500).json({
            error: "The posts information could not be retrieved.",
        });
    }
});

// Get
router.get('/api/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const postsId = await Posts.findById(id);

        if (postsId.length) {
            res.json(postsId);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    } catch (error) {
        res.status(500).json({ err: "Try again." });
    }
});

// Delete
router.delete('', (req, res) => {

});

// Put
router.put('', (req, res) => {

});


module.exports = router;