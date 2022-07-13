const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: "Post",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: "User",
                key: "id"
            }
        },
    },
    {
        sequelize,
        timestamp: true,
        freezeTableName: true,
        modelName: "comments",
        underscored: true
    },
)


module.exports = Comment;
