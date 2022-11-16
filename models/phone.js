const Sequelize = require('sequelize');
const sequelize = require('../database');
const person = require('./person');
const phone =sequelize.define('Phone', {
    ph_id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
    },
    brand:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false,
})



module.exports = phone