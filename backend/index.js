import express from 'express';
import {PORT,mongoDBURL} from './config.js';
import { empmodel } from './models/employeemodel.js';
import mongoose from 'mongoose';
import employeeroute from './routes/employeeroute.js';
import cors from "cors";

const app = express();
app.use(express.json());

//midleware to handle cors error
//option 1: allow all origins with default of cors(*)
app.use(cors());
//option 2allow custom origins
/*app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }
));*/


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