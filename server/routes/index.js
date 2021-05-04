const express = require('express');
const router = express.Router();
const mysqlConnection = require('../mysqlConnection');

router.get('/', async (req, res, next) => {
  mysqlConnection.query('SELECT * from donations', (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  })
});

router.post('/', async (req, res, next) => {
  // TODO: insert data into table
  let name=req.body.firstName;
  await mysqlConnection.query("INSERT INTO `donations` (donationId, `userId`, `firstName`, `lastName`, `streetAddress`, `city`, `state_region`, `country`, `postalCode`, `phoneNumber`, `email`, `preferredContact`, `preferredPayment`, `donationFrequency`, `donationAmount`) VALUES (?)", name.toString(), function(err, result){
      if(err) throw err;
          console.log("1 record inserted");
      });
  res.send(name);
});

module.exports = router;
