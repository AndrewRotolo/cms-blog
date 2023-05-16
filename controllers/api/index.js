const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');

//make sure to add project-specific routes here
router.use('/users', userRoutes);
router.use('/posts', blogpostRoutes);

module.exports = router;