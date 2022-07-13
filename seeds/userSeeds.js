const { User } = require("../models");

const userData = [
    {
        username: "kevzlegit",
        password: "ilikedogs123",
    },
    {
        username: "toneslegit",
        password: "ilikecats123",
    },
    {
        username: "brianslegit",
        password: "ilikebirds123",
    },
    {
        username: "axelegit",
        password: "ilikepoop123",
    },
];

const seededUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seededUsers;