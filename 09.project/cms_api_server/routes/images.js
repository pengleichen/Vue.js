var express = require('express');
var router = express.Router();
const path = require('path')
var fs = require('fs')
/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log(req)
  const img = fs.readFileSync(path.resolve(__dirname, `../public/images/${req.params.id}.jpg`))
  res.writeHead(200, {'Content-Type': 'image/jpg', 'Accept': 'image/WebKitPoint,image/apng,image/*'})
  if (img) {
    res.end(img, 'binary')
  } else {
    res.end('no such file: ${req.params.id}.jpg! \n');
  }
});

module.exports = router;
