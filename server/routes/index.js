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
});

module.exports = router;
