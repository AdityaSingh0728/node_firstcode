const express = require('express');
const router = express.Router();
const person = require('./../models/person')

router.get('/:status',async(req,res)=>{
    const status = req.params.status;
    if(status == "pass" || status=="fail"){
 const response = await person.find({status: status});
 res.status(200).json(response);
 console.log("data find");
 
    }
    else{
        res.status(404).json({error:"Invalid status"})
    }   
})
router.post('/',async (req,res)=>{
    try{
        const data = req.body;
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
    }
    catch(err){
console.log(err); 
    }

})
router.get('/',async (req,res)=>{
   const data = await person.find();
   console.log("data fetched")
   res.json(data);
})

router.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const updatedPerson = req.body;

    const response = await person.findByIdAndUpdate(id,updatedPerson,{
        new: true,
        runValidators:true
    });
    
    if(!response){
       res.status(404).json({error:"person Not found"})
    }
    res.status(200).json(response);
})
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;

    const response = await person.findByIdAndDelete(id);
    
    if(!response){
       res.status(404).json({error:"person Not found"})
    }
    res.status(200).json({message:"person deleted successfully"});
})
module.exports = router;