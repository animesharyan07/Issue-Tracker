const express=require('express')

const router=express.Router();

const Issue=require('../models/issue')

router.get('/',async(req,res)=>{
    try{
    const issues=await Issue.find();
    res.status(200).json(issues)
    }
    catch(err){
        console.error(`Error ${err.message}`);
        res.status(500).json({ error: "Failed to fetch issues" });
        
    }
})

router.get('/:id',async(req,res)=>{
    try{
    const issue=await Issue.findById(req.params.id); 			
    res.status(200).json(issue)
    }
    catch(err)
    {
        console.error(`Error ${err.message}`)
        res.status(500).json({error:"Failed to fetch issues"})
    }

})

router.post('/',async(req,res)=>{
  try {
    console.log("Incoming Data:", req.body);

    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save(); 

    console.log("Saved to DB:", savedIssue);
    res.status(201).json(savedIssue);
  } catch (err) {
    console.error("Error saving to DB:", err.message);
    res
      .status(500)
      .json({ error: "Failed to save issue", message: err.message });
  }
})

router.put('/:id',async(req,res)=>{
    const updateIssue=await Issue.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateIssue)

})

router.delete('/:id',async(req,res)=>{
    await Issue.findByIdAndDelete(req.params.id);
    res.json({message:'issue Deleted succesfully'})
})

module.exports=router;
