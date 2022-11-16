const {Sequelize}= require('sequelize')
const sequelize = require('../database');
const phone = require('./phone');
const person =sequelize.define('Person', {
    id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
    },
    name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName:true,
    timestamps:false,
});
person.hasOne(phone,{
     foreignKey:"PersonId",allowNull:false
    });
phone.belongsTo(person,{
    foreignKey:"PersonId",allowNull:false
});





module.exports = person