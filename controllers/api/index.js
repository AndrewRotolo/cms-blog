const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');

//make sure to add comment route here. I know this page only has 10 lines of code, but don't forget it!!!
router.use('/users', userRoutes);
router.use('/posts', blogpostRoutes);

module.exports = router;