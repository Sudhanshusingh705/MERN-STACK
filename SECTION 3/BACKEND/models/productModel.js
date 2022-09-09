const { Schema, model } = require("../connection");

//Here we are defining the structure of model
const myschema = new Schema({
  productname: String,
  price: Number,
  rating: String,
  
});

//starting the server
module.exports = model("product", myschema);
