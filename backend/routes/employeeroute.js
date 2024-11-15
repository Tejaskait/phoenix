import express from 'express';

import { employee } from '../models/employeemodel.js';
const router = express.Router();

router.post('/',async(request,response) =>{
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
   
   //to get all employees
   router.get('/',async(request,response) => {try {
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
   
   //to get only 1 employee
   router.get('/:id',async(request,response) => {try {
     const {id} = request.params;
     const newemp= await employee.findById(id);
     return response.status(200).json(newemp);
   } catch (error) {
     console.log(error.message);
     response.status(500).send({message: error.message});
   }
   });
   
   //to update an employee
   router.put('/:id',async(request,response) => {try {
     if(
       !request.body.empname|| 
       !request.body.empaddress
       ) {
         return response.status(400).send({message: "send all fields"});
       }
       const {id} = request.params;
       const newemp = await employee.findByIdAndUpdate(id,request.body);
       if(!newemp) {return response.status(404).send({message: "employee not found"});
     }
     return response.status(200).send({message: "employee update successful"});
   
   }catch (error) {
     console.log(error.message);
     response.status(500).send({message: error.message});
   }
   });
   
   //to delete a book 
   router.delete('/:id',async(request,response)=>{
     try{
       const {id} = request.params;
       const newemp = await employee.findByIdAndDelete(id);
       if(!newemp) {return response.status(404).send({message: "employee not found"});
       }
       return response.status(200).send({message: "employee deleted successfully"});
     }
     catch (error) {
       console.log(error.message);
       response.status(500).send({message: error.message});
     }
   });

   export default router;