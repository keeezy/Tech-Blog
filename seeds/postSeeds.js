const { Post } = require("../models");

const postData = [
    {
        title: "MVC",
        content: "Very difficult",
        user_id: 3
    },
    {
        title: "ORM",
        content: "Pretty Hard",
        user_id: 2
    },
    {
        title: "Handlebars.js",
        content: "So confusing",
        user_id: 1
    },
    {
        title: "HTML/CSS",
        content: "I like it a lot",
        user_id: 4
    },

];

const seededPosts = () => Post.bulkCreate(postData, {individualHooks: true});

module.exports = seededPosts;