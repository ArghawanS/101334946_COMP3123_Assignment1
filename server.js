

// Arghawan Ghulam Siddiq
// 101334946
// Assignment 1 - COMP 3123

const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const userModel= require("./models/User")
const userRoutes = require("./routes/UserRoutes")
const employeesRoutes= require("./routes/EmployeeRoutes")
const bodyParser = require('body-parser')


const app = express()
const SERVER_PORT = 8088

const DB_CONNECTION_STRING = "mongodb+srv://Assignment-1:pwy3tonrRwoKkCRv@cluster0.jsbnmvo.mongodb.net/Assignment1?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Successfully connected to the mongodb database server") 
    
}).catch(err => {
    console.log('Could not connect to the database.', err)
    process.exit()
})


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/emp/employees', employeesRoutes)
app.use('/api/user', userModel)

app.route("/")
	.get((request, response) => {
		response.send("<h1>COMP3123 Assignment 1</h1>")
	})

app.listen(SERVER_PORT || process.env.PORT, () => {
    console.log("Server started at http://localhost:%s", SERVER_PORT);
});
