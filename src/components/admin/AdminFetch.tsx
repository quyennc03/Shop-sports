import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAll, remove } from '../../api/Products'
import { IProduct } from '../../model'
const AdminFetch = () => {
    const [products, setProduct] = useState<IProduct[]>([])
    const fetchProducts = async () => {
        const { data } = await getAll();
        setProduct(data)
    }
    const removeProduct = async (id: string) => {
        try {
            const isConfirm = confirm("ban co chac chan muon xoa ko")
            if (isConfirm) {
                await remove(id)
                setProduct(products.filter(p => p._id !== id))
                alert("xoa thanh cong!")
            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return <>
        <div className="overflow-x-auto mt-10">
            <table
                className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700"
            >
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            #
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            name
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            price
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            price_origin
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            color
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                            image
                        </th>
                        <th className="px-4 py-2">
                            <Link to={"/admin/add"} className='inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700'>ADD</Link>
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {products.map((product, index) =>
                        <tr key={index}>
                            <td
                                className="text-center px-4 py-2 font-medium text-gray-900 dark:text-white"
                            >
                                {index + 1}
                            </td>
                            <td
                                className="text-center px-4 py-2 text-gray-700 dark:text-gray-200"
                            >
                                {product.name}
                            </td>
                            <td
                                className="text-center px-4 py-2 text-gray-700 dark:text-gray-200"
                            >
                                {product.price}
                            </td>
                            <td
                                className="text-center px-4 py-2 text-gray-700 dark:text-gray-200"
                            >
                                {product.price_origin}
                            </td>
                            <td
                                className="text-center px-4 py-2 text-gray-700 dark:text-gray-200"
                            >
                                {product.color}
                            </td>
                            <td
                                className="text-center px-4 py-2 text-gray-700 dark:text-gray-200 flex"
                            >
                                {product.images.map(item =>
                                    <img src={item} className='w-[75px] h-[75px] border border-[#ccc]' alt="" />
                                )}
                            </td>
                            <td className="text-center px-4 py-2">
                                <button
                                    onClick={() => removeProduct(product._id)}
                                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                >
                                    remove
                                </button>
                            </td>
                            <td className="text-center px-4 py-2">
                                <Link
                                    to={`/admin/update/${product._id}`}
                                    className="inline-block rounded bg-yellow-600 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-700"
                                >
                                    update
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    </>
}

export default AdminFetch
