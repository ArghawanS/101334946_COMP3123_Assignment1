// Arghawan Ghulam Siddiq
// 101334946
// Assignment 1 - COMP 3123
const express = require("express")
const router = express.Router()
const employeeModel = require("../models/Employee.js")
//const app = express()


// localhost:8081/api/emp/employees/
router.get('/', async(req,res)=> {
    res.render('server', {})
    try{
        const employees = await employeeModel.find()
        res.status(200).send(employees)
    }catch(err){
        res.status(500).send(err)
    }
})


//Create New Record
// {
// "first_name": "Tam",
// "last_name": "Harrow",
// "email": "tam@hollywood.com",
// "gender": "Male",
// "salary": 125500.00
// }
// localhost:8081/api/emp/employees/

router.post('/', async(req,res)=> {
    res.render('server', {})
    try{
        const employee = new employeeModel(req.body)
        await employee.save()
        res.status(201).send(employees)
    }catch(err){
        res.status(500).send(err)
    }
})



router.get('/:eid', async(req,res) =>{
    try{
        const employee = await employeeModel.findId(req.params)
        res.status(200).send(ne)
    }catch(err){
        res.status(500).send(err)
    }
})

//Update Record

router.put('/:eid', async (req,res) =>{
    try{
        const updateEmployee = await employeeModel.findByIdUpdate(req.params.id, req.body)
        const ne = await updateEmployee.save()
        res.status(200).send(ne)    
    }catch(err){
        res.status(500).send(err)
    }
})


//Delete Record

router.delete('/:eid', async(req,res) => {
    try{
        const employee = await employeeModel.findByIdDelete(req.query.id)
        if(!employee){
            res.status(404).send("No item found")
        }
        res.status(204).send(employee)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router



