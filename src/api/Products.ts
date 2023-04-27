import { formProduct, formProductUpdate } from "../model"
import instence from "./instence"

export const getAll = () => {
    return instence.get("/products")
}
export const getOne = (id: string) => {
    return instence.get("/products/" + id)
}
export const remove = (id: string) => {
    return instence.delete("/products/" + id, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM5MWRmZjJkMDllN2FiOWFhZTdhMCIsImlhdCI6MTY4MjUxODIxNiwiZXhwIjoxNjgyNjA0NjE2fQ.GmbEkSN0709RQA9KpSaRQEDG2uLbhiTW3W50t8I4gTc"
        }
    })
}
export const update = (id: string, product: formProductUpdate) => {
    return instence.put("/products/" + id, product, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM5MWRmZjJkMDllN2FiOWFhZTdhMCIsImlhdCI6MTY4MjUxODIxNiwiZXhwIjoxNjgyNjA0NjE2fQ.GmbEkSN0709RQA9KpSaRQEDG2uLbhiTW3W50t8I4gTc"
        }
    })
}
export const create = (product: formProduct) => {
    return instence.post("/products", product, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM5MWRmZjJkMDllN2FiOWFhZTdhMCIsImlhdCI6MTY4MjUxODIxNiwiZXhwIjoxNjgyNjA0NjE2fQ.GmbEkSN0709RQA9KpSaRQEDG2uLbhiTW3W50t8I4gTc"
        }
    })
}