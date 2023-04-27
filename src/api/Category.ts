import { ICategory } from "../model"
import instence from "./instence"

export const getAllCategory = () => {
    return instence.get("/category")
}
export const getOneCategory = (id: string) => {
    return instence.get("/category/" + id)
}
export const removeCategory = (id: string) => {
    return instence.delete("/category/" + id)
}
export const createCategory = (cate: ICategory) => {
    return instence.post("/category" + cate)
}
export const updateCategory = (id: string, cate: ICategory) => {
    return instence.put("/category/" + id, cate)
}
