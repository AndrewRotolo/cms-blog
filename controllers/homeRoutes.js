const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const blogPosts = blogPostData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        })


    } catch (err) {
        res.status(500).json({ message: "Error finding BlogPost data" });
    }
});

//Remember that both signup and sign in are on the same page.
router.get('/login', (req, res) => {
    res.render('signup')
});

router.get('/new', withAuth, async (req, res) => {
    try {
        res.render('create', {
            logged_in: true
        });
    } catch(err) {
        res.status(500).json({ message: `Error with "/new"` });
    }   
})

//Profile feature isn't implemented yet, but the route code is easy enough to stencil out here real quick so I can just uncomment it when it's time.
//router.get('/profile', withAuth, async (req, res) => {
//     try {
//         res.render('profile', {
//             logged_in: true
//         });
//     } catch(err) {
//         res.status(500).json({ message: `Error with "/error"` });
//     }
// })