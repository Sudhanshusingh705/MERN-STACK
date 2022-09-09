const express = require('express');
const router = express.Router();

router.get('/add', (req,res) => {
    res.send('Response from Add Video Router');
})

router.get('/home', (req,res) => {
    res.send('Response from Home Video Router');
})

router.get('/order', (req,res) => {
    res.send('Response from Order Video Router');
})

//Exporting  routes
module.exports = router;
