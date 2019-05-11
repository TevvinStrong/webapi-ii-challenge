const express = require('express');

const Posts = require('./db.js');

const router = express.Router();

//*** Routes ***\\

// Post ----
router.post('/api/posts', async (req, res) => {
    try {
        const createPosts = await Posts.insert(req.body);
        res.status(201).json(createPosts);
    } catch (error) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the posts." });
    }
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
router.get('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
    try {
        const deletePosts = await Posts.remove(req.params.id);
        if (deletePosts > 0) {
            res.status(200).json({ message: "The selected posts has been destroyed." });
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    } catch (error) {
        res.status(500).json({ error: "The post could not be removed" });
    }
});

// Put
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);
        const updatePosts = await Posts.update(req.params.id, req.body);
        console.log(updatePosts);
        if (updatePosts) {
            res.status(200).json(updatePosts);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    } catch (error) {
        res.status(500).json({ error: "The post information could not be modified." });
    }
});


module.exports = router;