const express = require('express')
const mongoose =  require( 'mongoose')
const app = express()
const Student = require('./models/studentModel')

//using middleware for a application to understand json

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Routes (to see it on website)

app.get('/',(req,res) =>{
    res.send("Hello node api")
})


//get data in database
app.get('/students', async(req, res) =>{
    try {
        const students = await Student.find({});
        res.status(200).json(students);

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//get particular entry from the database

app.get('/students/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//save data in database

app.post('/students' , async(req,res) => {
try {
const student = await Student.create(req.body)
res.status(200).json(student);

}catch(error){
    console.log(error.message);
    res.status(500).json({mesage: error.message})
}
})


//update the data 
app.put('/students/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id , req.body);
        if(!student){
            return res.status(404).json({message: 'cannot find any product with ID ${id}'})
        }
        const updatedStudent = await Student.findById(id)
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete the entry in Database

app.delete('/students/:id', async(req,res) =>{
    try{
 const {id} = req.params;
 const student = await Student.findByIdAndDelete(id);
 if(!student){
    return res.status(404).json({message: 'cannot find any product with ID ${id}'})
 }
 res.status(200).json(student)
    }catch(error){
        res.status(500).json({message:error.mesage})
    }
})

mongoose.set("strictQuery",false)
mongoose.
connect('')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node api app is running on port 3000')
    })
    
}).catch(() => {
    console.log(error)
})