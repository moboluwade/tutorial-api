const express = require('express')
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'you have accessed the orders page'
    })
})

router.post('/', (req, res, next)=>{
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: `you have made a request to the orders page, you asked for ${quantity, productID}`,
        createdOrder: order
    })
})

router.get('/:orderID', (req, res, next)=>{
    const orderId = req.params.orderID
    res.status(200).json({
        message: `you have accessed the ${orderId} page`,
        id: orderId
    })
})

router.delete('/:orderID', (req, res, next)=>{
    const orderId = req.params.orderID
    res.status(200).json({
        message: `you have deleted the ${orderId} page`,
        id: orderId
    })
})

module.exports = router;