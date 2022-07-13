const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: "users",
                key: "id"
            }
        },
    },
    {
        sequelize,
        timestamp: true,
        freezeTableName: true,
        modelName: "posts",
        underscored: true
    },
)


module.exports = Post;
