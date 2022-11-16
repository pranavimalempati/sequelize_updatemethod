const person = require('../controller/person_controller')
const router =require('express').Router()

router.post('/create',person.add)
router.put('/update/:PersonId',person.update)

module.exports = router