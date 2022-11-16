const { Sequelize } = require("sequelize");
const sequelize = require('../database');
const Person =require("../models/person")
const Phone =require("../models/phone")


const add = async(req,res)=>{
    try {
        const resp = await Person.create(req.body, {
            include: [
                {
                    model: Phone,
                },
            ],
        });
    res.status(200).json({
        status:"success",
        response:resp,
        message:"record inserted successfully"
    })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
};

// updating the two models at once

  const update = async (req, res) => {
      const {name, email, brand, amount} = req.body;
      const updatePersonObject = { name, email,};
      const updatePhoneObject = {brand, amount, };
      try {
        const data = await sequelize.transaction(async t => {
        const updatePromises = [];
        const updatePersonPromise = Person.update(
            updatePersonObject,
          { where:{
             id: req.params.PersonId 
            } },
          { transaction: t }
        );
        updatePromises.push(updatePersonPromise);
  
        const updatePhonePromise = Phone.update(
            updatePhoneObject,
          { where:{ 
            PersonId: req.params.PersonId 
            } },
          { transaction: t }
        );
        updatePromises.push(updatePhonePromise);
  
        await Promise.all(updatePromises);
        res.send('user records updates')
    });
      } catch (e) {
        res.send(e.message)
      }
    }

module.exports = {add,update}

