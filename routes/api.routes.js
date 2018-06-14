const express = require('express')
/*
 Feel free to split up routes more if you want
*/
const router = express.Router()

/*
    GET a list of shelters
 */
router.get('/rushees', function (req, res, next) {
  res.status(501).send({message: 'Not Yet implemented'})
})

module.exports = router
