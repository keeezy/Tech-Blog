const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model { }

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
    },
    {
        hooks: {
            beforeCreate: async (userData) => {
                userData.username = await userData.username.toLowerCase();
                userData.password = await bcrypt.hash(userData.password, 5);
                return userData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: "users",
        underscored: true
    },
)


module.exports = User;

