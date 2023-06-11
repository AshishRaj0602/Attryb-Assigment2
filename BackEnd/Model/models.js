const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  mileage: { type: Number, required: true },
});

const userSchema = new Schema({
  name:{ type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  cnfPass:{ type: String,required: true}
});

module.exports = {
  Car: mongoose.model('Car', carSchema),
  User: mongoose.model('User', userSchema),
};
