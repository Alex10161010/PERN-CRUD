const { Router } = require('express');
const router = Router();
const service = require('../controllers/tasks.controller');

/* const service = new TareaService(); */

router.get('/tasks', service.getAll);

router.get('/tasks/:id', service.getById);

router.post('/tasks', service.create);

router.delete('/tasks/:id', service.destroy);

router.put('/tasks/:id', service.update);

module.exports = router;
