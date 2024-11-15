import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import { employee } from './models/employeemodel.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.get('/',(request,response) =>{
  console.log(response)
return response.status(234).send("welcomeee")});

app.post('/employee',async(request,response) =>{
 try {
  if(
  !request.body.empname|| 
  !request.body.empaddress
  ) {
    return response.status(400).send({message: "send all fields"});
  }
  const newemployee = {
empname: request.body.empname,
    empaddress: request.body.empaddress,

  };
  const newemp = await employee.create(newemployee);
  return response.status(201).send(newemp);
 } catch (error) {
  console.log(error.message);
  response.status(500).send({message: error.message});
 }
});

app.get('/employee',async(request,response) => {try {
  const newemps= await employee.find({});
  return response.status(200).json({
    count : newemps.length,
    data : newemps
  });
} catch (error) {
  console.log(error.message);
  response.status(500).send({message: error.message});
}
});
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('app connected to database');
    app.listen(PORT, () => {
      console.log(`app listening on port: ${PORT}`); 
    });
  })
  .catch((error) => {
    console.log(error);
  });