const { Comment } = require("../models");

const commentData = [
    {
        content: "first comment",
        user_id: 3,
        post_id: 1
    },
    {
        content: "second comment",
        user_id: 2,
        post_id: 1
    },
    {
        content: "third comment",
        user_id: 1,
        post_id: 1
    },
    {
        content: "fourth comment",
        user_id: 4,
        post_id: 1
    },

];

const seededComments = () => Comment.bulkCreate(commentData, {individualHooks: true});

module.exports = seededComments;