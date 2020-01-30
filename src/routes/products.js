const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.index);

router.get('/create', controller.create);
router.post('/create', controller.store);

router.get('/detail/:id', controller.show);

router.delete('/:id', controller.destroy);

module.exports = router;