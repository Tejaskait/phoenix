import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import { employee } from './models/employeemodel.js';
import mongoose from 'mongoose';
import employeeroute from "./routes/employeeroute.js";

const app = express();
app.use(express.json());
app.get('/',(request,response) =>{
  console.log(response)
return response.status(234).send("welcomeee")});

app.use('/employee', employeeroute);

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