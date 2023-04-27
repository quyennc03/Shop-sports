import joi from 'joi'

export const categorySchemas = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Truong name khong duoc bo trong",
        "any.required": "Truong name bat buoc nhap"
    }),
    image: joi.string().required().messages({
        "string.empty": "Truong image khong duoc bo trong",
        "any.required": "Truong image bat buoc nhap"
    }),
})