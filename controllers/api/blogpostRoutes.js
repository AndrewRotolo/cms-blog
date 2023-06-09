const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

//New post route
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogpost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogpost)
    } catch (err) {
        res.status(400).json(err)
    }
});

//delete a post route with a check to make sure the user is the creator
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogpostData) {
            res.status(404)/json({ message: 'No matching posts found' });
            return
        }
        res.status(200).json(blogpostData)
    } catch (err) {
        res.status(500).json(err);
    }
});

//Edit post route
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await BlogPost.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if (!blogpostData) {
            res.status(404).json({ message: 'No matching posts found' });
            return;
        }
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err)
    }
})