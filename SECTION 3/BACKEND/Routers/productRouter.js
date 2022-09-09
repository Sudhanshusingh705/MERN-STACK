const express = require("express");
const router = express.Router();
const model = require("../models/productModel");

router.post("/add", (req, res) => {
  console.log(req.body);
  // res.send('Response from product Router');

  //Add operation
  new model(req.body).save() //save is promise
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/getall", (req, res) => {
  model
    .find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// ':' colon denotes url parametar
router.get("/getbyproductrname/:productname", (req, res) => {
  console.log(req.params.productname);
  model
    .find({ username: req.params.productname })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  model
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Exporting  routes
module.exports = router;
