const express = require('express')
const router = express.Router()

const Swipe = require('../../db/api/swipe')

/* GET home page. */
router.get('/', function(req, res) {
  Swipe.findAll().then(results => res.send(results))
})

module.exports = router;
