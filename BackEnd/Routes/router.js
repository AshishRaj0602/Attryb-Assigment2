const express = require('express');
const router = express.Router();
const { Car, User } = require('../Model/models');

// Signup route
router.post('/signup', (req, res) => {
  const data=req.body;
  const {name,email,password,cnfPass}=data;
  console.log(data);
  if(!data){
    return res.status(404).json({message:"signup faild"});
  }
  else{
    const newResponse = new User({ name, email, password,cnfPass });

  // Save the new response to the database
  newResponse.save()
    .then(() => res.status(201).json({status:'success', message: 'Response saved successfully' }))
    .catch(error => res.status(500).json({status:'faild', message: 'Error saving response', error }));
    // return res.status(201).json({message:"signup successful",data:data});
  }
});

// Login route
router.post('/login', async(req, res) => {
  // Handle login logic here
  console.log("req.body.email")
 const user=await User.findOne({email:req.body.email, password: req.body.password });
 if(!user){
  alert("User not found");
 }
 else{
  alert("User succesfully logged in");
 }
 return res.status(201).json({ status:"success",message:"succsess",user})
});
router.post('/', function(req, res) {
  // do something w/ req.body or req.files 
});

// Add car route
router.post('/car/add', (req, res) => {
  // Handle adding car logic here
});

// Get all cars route
router.get('/cars', (req, res) => {
  // Handle getting all cars logic here
});

// Delete car route
router.delete('/car/:id', (req, res) => {
  // Handle deleting car logic here
});

// Edit car route
router.put('/car/:id', (req, res) => {
  // Handle editing car logic here
});

module.exports = router;
