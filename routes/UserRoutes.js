// Arghawan Ghulam Siddiq
// 101334946
// Assignment 1 - COMP 3123

const express = require("express")
const { model } = require("mongoose")
const router = express.Router()
const employeeModel = require("../models/User.js")
const app = express()

// {"username": "p@p.com",
// "password": "password$123" 
// }

// { "status": true,
// "username": "p@p.com", 
// "message": "User logged in successfully",
// "jwt_token": "Optional implementation"
// }

//sing up
router.post('/signup', async(req,res) =>{
    res.render('server',{})
    try{
        const new_user = await new userModel(req.body)
        await new_user.save()
        res.status(201).send(new_user)
    }catch(err){
        res.status(500).send(err)
    }
} )

//login user

router.post('/login', async (req,res) =>{
    try{
        const user =await userModel.findOne(req.params.id)
        if(!user){
            res.status(404).send("No User found")
        }
    }catch(err){
        res.status(500).send(err)
    }
})



model.express =router