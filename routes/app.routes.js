const express = require("express");
/*
 Feel free to split up routes more if you want
*/
const router = express.Router();

/*
    GET a list of shelters
 */
router.get('/',function (req, res, next) {
    res.status(200).send({message: 'hello world!'})
});

modules.export = router
