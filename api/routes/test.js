const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.post('/',(req, res, next)=>{
    const debug = req.body.text
    console.log(debug)
})

module.exports= router;