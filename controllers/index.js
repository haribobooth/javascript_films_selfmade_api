var express = require('express');
var router = express.Router();

router.use('/api/films', require('./films'));



module.exports = router;
