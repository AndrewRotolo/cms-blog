const sequelize = require('../config/connection');

const userData = require('./userData.json')
//don't forget to add other models!!!
const { User } = require('../models');

//const xData = require('./xData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    //don't forget logic for other models


    process.exit(0);
};

seedDatabase();