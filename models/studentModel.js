const mongoose = require('mongoose')
const studentSchema = mongoose.Schema(
    {
        id : {
            type: String,
            required: [true,"Please enter the student id"]
        },
        name: {
            type : String,
            required :[ true,"please enter the student name"]
        },
        cgpa: {
            type : Number,
            required :true,
            default: 0 

        }
    },
    {
    timestamps:true
    }
)

const Student = mongoose.model('student',studentSchema);

module.exports = Student;