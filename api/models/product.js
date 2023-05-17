const { default: mongoose, Schema } = require("mongoose")

const productSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    price: Number
})

module.exports = mongoose.model('Product', productSchema)