import { useEffect, useState } from "react"
import { ICategory, IProduct } from "../model"
import { getAll } from "../api/Products"
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../api/Category"
import { Link } from 'react-router-dom'
const ProductItem = () => {
    const { id } = useParams()
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory>({} as ICategory)
    const fetchProducts = async () => {
        try {
            const { data } = await getAll()
            if (id) {
                setProducts(data.filter((product: IProduct) => product.categoryId?._id === id));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOneCategory = async () => {
        try {
            if (id) {
                const { data: { category } } = await getOneCategory(id)
                setCategory(category)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProducts()
        fetchOneCategory()
    }, [])
    return <div className="flex-1 py-10">
        <h1 className='text-[24px] font-bold'>{category.name}</h1>
        <div className="grid grid-cols-3 gap-8 mt-10 cursor-pointer">
            {products.map((product, index) =>
                <Link to={`/product/detail/${product._id}`} key={index} className="border border-[#ccc] relative flex flex-col rounded-lg overflow-hidden">
                    <p className={`bg-red-500 inline-block text-[#fff] top-2  absolute z-10 px-1
                     ${product.price / product.price_origin === 1 ? "hidden" : ""}
                    `}>-{
                            Math.round((product.price === product.price_origin) ? 0 * 1 : ((product.price_origin - product.price) / product.price_origin) * 100)
                        } <span>%</span></p>
                    <div className="w-full h-[300px] group overflow-hidden">
                        {product?.images?.map((src, index) =>
                            <img key={index} src={src} className="ml-[50%] group-hover:scale-110 transition-transform ease-linear w-full h-full translate-x-[-50%] flex-shrink-0 " alt="" />
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-3 p-4">
                        <p className="text-[15px] text-[#000] mt-4 flex-shrink-0 mb-2">{product.name}</p>
                        <div className=""><del className="text-[13px] text-[#ccc] font-semibold mt-auto">{product.price_origin}</del><span className="font-bold text-red-600 ml-2">{product.price}</span></div>
                    </div>
                </Link>
            )}
        </div>
    </div>
}

export default ProductItem
