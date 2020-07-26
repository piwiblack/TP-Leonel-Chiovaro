const express = require ('express');
const router = express.Router();
const marcasController = require ('../controller/marcasController');


router.get('/', marcasController.listadoMarcas);
router.get('/:marca', marcasController.autosPorMarca);



module.exports = router;
