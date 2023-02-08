let express = require('express');
let router = express.Router();
let controller = require ("../controllers/indexController")

/* GET home page. */
router.get ('/', controller.index);

router.get ('/detalle/:id', controller.detalle);


module.exports = router;
