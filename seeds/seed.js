const sequelize = require('../config/connection');
// const { Example } = require('../models');
// const exampleData = require('./exampleData.json');
const seededUsers = require("./userSeeds");
const seededPosts = require("./postSeeds")
const seededComments = require("./commentSeeds")

// force: true will drop the table if it already exists
//npm run seed will execute this file, which will seed the database with the example data
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await seededUsers();
    console.log("USERS SEEDED!!!!!!!!!!!!!!")

    await seededPosts();
    console.log("POSTS SEEDED!!!!!!!!!!!!!!")

    await seededComments();
    console.log("COMMENTS SEEDED!!!!!!!!!!!!!!")
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

seedDatabase();
