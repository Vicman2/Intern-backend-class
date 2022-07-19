const express = require('express');
const router = express.Router()
const UserCtrl = require('../controllers/user.controller')


router.post('/create', UserCtrl.createUser)

module.exports = router