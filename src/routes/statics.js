const express = require('express');
const router = express.Router();
const controller = require('../controllers/staticsController');

router.get('/', controller.index);
router.get('/acerca-de', controller.about);
router.get('/contacto', controller.contact);

module.exports = router;