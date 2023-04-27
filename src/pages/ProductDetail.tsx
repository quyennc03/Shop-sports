import { useEffect, useState } from "react"
import { ICategory, IProduct } from "../model"
import { getOne } from "../api/Products"
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../api/Category"
import { Link, useNavigate } from 'react-router-dom'
const ProductDetail = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>({} as IProduct)

    const [category, setCategory] = useState<ICategory>({} as ICategory)
    const [productCate, setProductCate] = useState<IProduct[]>([])


    const fetchOneProduct = async () => {
        try {
            if (id) {
                const { data: { product } } = await getOne(id)
                setProduct(product)
            }
        } catch (error) {
            console.log(error);

        }
    }
    const fetchOneCategory = async () => {
        try {
            if (product?.categoryId) {
                const { data: { category } } = await getOneCategory(product.categoryId.toString())
                setCategory(category)
            }
        } catch (error) {

        }
    }
    const fetProductCate = () => {
        if (category && product) {
            setProductCate(category?.products?.filter((pro: IProduct) => pro._id != product._id))
        }
    }
    const countPlus = () => {
        if (count > 10) {
            return
        }
        setCount(count + 1)
    }
    const countMinus = () => {
        if (count < 1) {
            return
        }
        setCount(count - 1)
    }
    useEffect(() => {
        if (product) {
            fetchOneCategory()
            fetProductCate()
        }
    }, [product])
    useEffect(() => {
        fetchOneProduct()
    }, [])
    useEffect(() => {
        countPlus()
        countMinus()
    }, [])

    return <div>
        <div className="max-w-[1280px] mx-auto">
            <div className="flex mt-2">
                <div className="flex flex-col w-[40%]">
                    <div className="h-[512px] w-[512px] overflow-hidden">
                        {product?.images?.map((src, index) =>
                            <img key={index} src={src} className="border border-[#ccc]" alt="" />
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                        {product.images?.map((img, index) =>
                            <div key={index} className="border border-[#ccc] flex items-center justify-center">
                                <img src={img} className="w-full object-cover" alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="py-4 px-10 w-[60%]">
                    <h1 className="text-[28px] text-[#000]">{product.name}</h1>
                    {/* price */}
                    <div className="flex text-[24px] mt-8"><p className="text-red-600 font-bold">{product.price}</p><del className="text-[#ccc] font-semibold ml-3">{product.price_origin}</del></div>
                    {/* size */}
                    <div className="flex flex-col">
                        <p className="text-[#111111] text-[16px] font-bold mt-8">Kích cỡ:</p>
                        <div className="flex ml-[-8px] w-[250px] mt-3 flex-wrap">
                            {product?.Specifications?.[0]?.sizes?.map((size: string, index) =>
                                size?.split(",").map((value, i) =>
                                    <p key={index + i} className="w-[40px] ml-[8px] cursor-pointer h-[40px] border border-[#ccc] flex items-center justify-center">{value}</p>
                                )
                            )}
                        </div>
                    </div>
                    {/* quantity */}
                    <div className="flex flex-col">
                        <p className="text-[#111111] text-[16px] font-bold mt-8">Số lượng:</p>
                        <div className="flex mt-2">
                            <button className="h-[40px] w-[40px] flex items-center justify-center border border-[#ccc]" onClick={() => countMinus()}>-</button>
                            <div className="h-[40px] w-[40px] flex items-center justify-center border border-[#ccc]">{count}</div>
                            <button className="h-[40px] w-[40px] flex items-center justify-center border border-[#ccc]" onClick={() => countPlus()}>+</button>
                            <button className="min-w-[200px] ml-3 bg-red-600 text-[#fff] py-2 rounded-lg">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    <p className="text-[#111111] text-[16px] font-bold mt-8">Cùng bộ sưu tập:</p>
                    <div className="grid grid-cols-4 gap-2 mt-2 w-[350px]">
                        {product.images?.map((img, index) =>
                            <div key={index} className="border border-[#ccc] flex items-center justify-center border-dashed">
                                <img src={img} className="w-full object-cover" alt="" />
                            </div>
                        )}
                    </div>
                    <p className="text-[#111111] text-[14px] font-bold mt-8 uppercase">Cửa hàng sẵn có:</p>
                    <ul className="flex flex-col">
                        <li className="flex flex-col mt-2">
                            <p className="text-red-600 font-bold">Peak Bắc Ninh</p>
                            <span className="text-[14px]">Số nhà 94 , Tân Hồng , Yên Lã 2</span>
                        </li>
                        <li className="flex flex-col mt-2">
                            <p className="text-red-600 font-bold">Peak Nhật Bản</p>
                            <span className="text-[14px]">Số nhà 94 , Tân Hồng , Yên Lã 2</span>
                        </li>
                        <li className="flex flex-col mt-2">
                            <p className="text-red-600 font-bold">Peak Mỹ</p>
                            <span className="text-[14px]">Số nhà 94 , Tân Hồng , Yên Lã 2</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="">
                <p className="text-red-600">Mô tả</p>
                <div className="mt-2">⭐ Thương hiệu: <span>{product.Specifications?.[0]?.brand}</span></div>
                <div className="mt-2">⭐ Chức năng: <span>{product.Specifications?.[0]?.func}</span></div>
                <div className="mt-2">⭐ Cỡ giày: <span>{product.Specifications?.[0]?.sizes}</span></div>
                <div className="mt-2">⭐ Công nghệ giày thể thao: <span>{product.Specifications?.[0]?.technology}</span></div>
                <div className="mt-2">⭐ Thiết kế: <span>{product.Specifications?.[0]?.degisne}</span></div>
                <div className="mt-2">⭐ Đế ngoài: <span>{product.Specifications?.[0]?.outSole}</span></div>
            </div>
            <div className="mt-5">🔰 Peak Sport Việt Nam cam kết:
                <p className="mt-2">– Sản phẩm Chính hãng, 100% giống mô tả</p>
                <p className="mt-2">– Sản phẩm được kiểm tra kĩ càng, đóng gói cẩn thận và tư vấn nhiệt tình trước khi gói hàng và giao hàng</p>
                <p className="mt-2">– Giao hàng trên toàn quốc, thanh toán online hoặc COD (nhận hàng trả tiền sau).</p>
            </div>
            <h1 className="text-[24px] mt-10 font-bold">Sản phẩm tương tự</h1>
            <div className="mt-5 grid grid-cols-4 gap-3">
                {productCate?.map((pro, index) =>
                    <Link to={`/product/detail/${pro._id}`} key={index} className="border border-[#ccc] relative flex flex-col rounded-lg overflow-hidden">
                        <p className={`bg-red-500 inline-block text-[#fff] top-2  absolute z-10 px-1
                     ${pro.price / pro.price_origin === 1 ? "hidden" : ""}
                    `}>-{
                                Math.round((pro.price === pro.price_origin) ? 0 * 1 : ((pro.price_origin - pro.price) / pro.price_origin) * 100)
                            } <span>%</span></p>
                        <div className="w-full h-[300px] group overflow-hidden">
                            {pro?.images?.map((src, index) =>
                                <img key={index} src={src} className="ml-[50%] group-hover:scale-110 transition-transform ease-linear w-full h-full translate-x-[-50%] flex-shrink-0 " alt="" />
                            )}
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-3 p-4">
                            <p className="text-[15px] text-[#000] mt-4 flex-shrink-0 mb-2">{pro.name}</p>
                            <div className=""><del className="text-[13px] text-[#ccc] font-semibold mt-auto">{pro.price_origin}</del><span className="font-bold text-red-600 ml-2">{pro.price}</span></div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    </div>
}

export default ProductDetail
