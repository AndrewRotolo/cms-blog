const sequelize = require('../config/connection');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
//don't forget to add other models!!!
const { User, BlogPost, Comment } = require('../models');

//const xData = require('./xData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Note that bcrypt will fuck with seeded users and you won't be able to log into them. Maybe there's a workaround, but it's not worth dealing with at this point.
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    //don't forget logic for other models
    const blogposts = await BlogPost.bulkCreate(blogpostData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();