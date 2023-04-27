import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    price_origin: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true,
        }
    ],
    Specifications: [
        {
            brand: {
                type: String,
                required: true
            },
            func: {
                type: String,
                required: true
            },
            sizes: [
                {
                    type: String,
                    required: true
                }
            ],
            technology: {
                type: String,
                required: true
            },
            degisne: {
                type: String,
                required: true
            },
            outSole: {
                type: String,
                required: true
            },
        }
    ],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
})

export default mongoose.model('Product', productSchema)