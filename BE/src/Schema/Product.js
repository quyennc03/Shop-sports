import joi from 'joi'
export const productSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Ten khong duoc bo trong",
        "any.required": "Truong ten bat buoc nhap"
    }),
    price: joi.number().min(1).required().messages({
        "string.empty": "price khong duoc bo trong",
        "any.required": "Truong price bat buoc nhap",
        "string.min": "price phai lon hon hoac bang 1",
    }),
    price_origin: joi.number().min(1).required().messages({
        "string.empty": "price_origin khong duoc bo trong",
        "any.required": "Truong price_origin bat buoc nhap",
        "string.min": "price_origin phai lon hon hoac bang 1",
    }),
    color: joi.string().required().messages({
        "string.empty": "color khong duoc bo trong",
        "any.required": "Truong color bat buoc nhap",
    }),
    images: joi.string().required().messages({
        "string.empty": "images khong duoc bo trong",
        "any.required": "Truong images bat buoc nhap",
    }),
    Specifications: joi.array()
        .items(
            joi.object({
                brand: joi.string().required(),
                func: joi.string().required(),
                sizes: joi.string().required(),
                technology: joi.string().required(),
                degisne: joi.string().required(),
                outSole: joi.string().required(),
            })
        )
        .required()
        .messages({
            "array.empty": "Specifications không được bỏ trống",
            "any.required": "Trường Specifications bắt buộc phải có",
        }),

    categoryId: joi.string().required().messages({
        "string.empty": "categoryId khong duoc bo trong",
        "any.required": "Truong categoryId bat buoc nhap",
    }),
})