import mongoose from "mongoose";
const employeeschema = mongoose.Schema({
    empname:{
        type: String,
        required: true,
    },
    empaddress:{
        type: String,
        required: true,
        
    },
},
    {
        timemark: true,
    }


);
export const employee = mongoose.model('employee', employeeschema);