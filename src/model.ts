import * as yup from "yup";
export interface IProduct {
    _id: string
    name: string
    price: number
    price_origin: number
    Specifications: ISpecifications[]
    color: string
    images: []
    categoryId: ICategory
}

export interface ICategory {
    name: string
    _id: string
    image: string
    products: IProduct[]
}

export interface ISpecifications {
    brand: string
    func: string
    sizes: []
    technology: string
    degisne: string
    outSole: string
}

export const productsSchema = yup.object({
    name: yup.string().trim().required("Truong name bat buoc"),
    price: yup.number().required("Truong price bat buoc"),
    price_origin: yup.number().required("Truong price_origin bat buoc"),
    color: yup.string().trim().required("Truong color bat buoc"),
    images: yup.string(),
    categoryId: yup.string(),
    Specifications: yup.array()
        .of(
            yup.object({
                brand: yup.string().trim().required("Truong brand bat buoc"),
                func: yup.string().trim().required("Truong func bat buoc"),
                sizes: yup.string(),
                technology: yup.string().trim().required("Truong technology bat buoc"),
                degisne: yup.string().trim().required("Truong degisne bat buoc"),
                outSole: yup.string().trim().required("Truong outSole bat buoc"),
            })
        )
        .required(),
})

export type formProduct = yup.InferType<typeof productsSchema>
export const updateSchema = yup.object({
    name: yup.string().trim().required("Truong name bat buoc"),
    price: yup.number().required("Truong price bat buoc"),
    price_origin: yup.number().required("Truong price_origin bat buoc"),
    color: yup.string().trim().required("Truong color bat buoc"),
    images: yup.string(),
    categoryId: yup.string(),
    Specifications: yup.array()
        .of(
            yup.object({
                brand: yup.string().trim().required("Truong brand bat buoc"),
                func: yup.string().trim().required("Truong func bat buoc"),
                sizes: yup.array(),
                technology: yup.string().trim().required("Truong technology bat buoc"),
                degisne: yup.string().trim().required("Truong degisne bat buoc"),
                outSole: yup.string().trim().required("Truong outSole bat buoc"),
            })
        )
        .required(),
})

export type formProductUpdate = yup.InferType<typeof updateSchema>

