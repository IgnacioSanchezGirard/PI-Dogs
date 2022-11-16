const { Router } = require('express');
const Temper = require('./tempers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use ('/dogs', dogs);
router.use ('/tempers', Temper);


module.exports = router;
