import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ICategory, formProduct, productsSchema } from '../../model'
import { yupResolver } from '@hookform/resolvers/yup'
import { create } from '../../api/Products'
import { useNavigate } from 'react-router-dom'
import { getAllCategory } from '../../api/Category'
const AdminAdd = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate()
    const fetchCategories = async () => {
        const { data } = await getAllCategory()
        setCategory(data)
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formProduct>({
        resolver: yupResolver(productsSchema)
    })
    const onSubmitForm = async (data: formProduct) => {
        try {
            await create(data)
            navigate("/admin")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    return <>
        <section className="bg-gray-100 mt-20">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 shadow-lg w-full lg:p-12">
                        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
                            <div>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    {...register("name")}
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.name && errors.name.message}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Images"
                                        type="text"
                                        {...register("images")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.images && errors.images.message}
                                    </p>
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="color"
                                        type="text"
                                        {...register("color")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.color && errors.color.message}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="brand"
                                        type="text"
                                        {...register("Specifications.0.brand")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.brand?.message}
                                    </p>
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="function"
                                        type="text"
                                        {...register("Specifications.0.func")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.func?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="technology"
                                        type="text"
                                        {...register("Specifications.0.technology")}

                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.technology?.message}
                                    </p>
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="sizes"
                                        type="text"
                                        {...register("Specifications.0.sizes")}

                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.sizes?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="desgine"
                                        type="text"
                                        {...register("Specifications.0.degisne")}

                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.degisne?.message}
                                    </p>
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="outSole"
                                        type="text"
                                        {...register("Specifications.0.outSole")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.Specifications?.[0]?.outSole?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="price"
                                        min={1}
                                        type='number'
                                        {...register("price")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.price && errors.price.message}
                                    </p>
                                </div>

                                <div>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="price_origin"
                                        min={1}
                                        type="number"
                                        {...register("price_origin")}
                                    />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.price_origin && errors.price_origin.message}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <select className='w-full rounded-lg border-gray-200 p-3 text-sm' {...register("categoryId")}>
                                    {category.map((category) =>
                                        <option value={category._id}>{category.name}</option>
                                    )}
                                </select>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    ADD
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AdminAdd
