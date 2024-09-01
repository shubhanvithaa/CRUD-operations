const express = require('express')
const app = express()


//Routes (to see it on website)

app.get('/',(req,res) =>{
    res.send("Hello node api")
})
app.listen(3000, ()=> {
    console.log('Node api app is running on port 3000')
})