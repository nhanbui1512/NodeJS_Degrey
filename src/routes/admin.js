const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/adminController');



router.use('/',adminController.index);

module.exports = router;