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
        timestamps: true,
    }


);
export const empmodel = mongoose.model('employee', employeeschema);