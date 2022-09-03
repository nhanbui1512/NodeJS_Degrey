const express = require('express');
const router = express.Router();
const authMidleware = require('../middleware/auth.middleware');
const adminController = require('../app/controllers/adminController');


router.use('/',adminController.index);

module.exports = router;