const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');


router.get('/setupdb', UserController.setupDB);

router.get('/getall', UserController.getAll);

router.post('/', UserController.create);

router.get('/:id', UserController.getSingle);

router.put('/:id', UserController.updateSingle);

router.delete('/:id', UserController.deleteSingle);

module.exports = router;