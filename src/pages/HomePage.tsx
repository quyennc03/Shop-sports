import { useEffect, useState } from "react"
import { ICategory } from "../model"
import { getAllCategory } from "../api/Category"
import { Link } from 'react-router-dom'
const HomePage = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetchCategories = async () => {
        try {
            const { data } = await getAllCategory()
            setCategories(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return <div className="">
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            <div className="relative h-56px overflow-hidden rounded-lg md:h-[500px]">
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://thumbs.dreamstime.com/b/sport-banner-facebook-cover-set-sport-balls-gaming-items-blue-background-corporate-facebook-cover-healthy-86803224.jpg" className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://www.loire.fr/upload/docs/image/png/2020-08/banniere_sport.png.associated/th-1920x1000-banniere_sport.png.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://t4.ftcdn.net/jpg/02/86/93/35/360_F_286933595_BMa9QBz8qwJPcoqoTjs2lI4vnP7mYq3Z.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full" alt="..." />
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        <h1 className="text-[24px] font-bold text-center mt-10">Cửa hàng thể thao</h1>
        {categories.map((cate, index) =>
            <div className="max-w-[1280px] mx-auto" key={index}>
                <div className="relative w-full min-h-[600px]  mt-10">
                    <img src={cate.image} alt="" className="relative w-full h-[500px]" />
                    <div className="bg-[#fff] w-[860px] h-[210px] flex flex-col justify-center items-center border-1 border-[#000] shadow-lg absolute bottom-[0] left-[50%] translate-x-[-50%]">
                        <h3 className="text-[18px] font-bold uppercase">{cate.name}</h3>
                        <p>Đến với cửa hàng {cate.name}</p>
                        <Link to={`/product/theloai/${cate._id}`} className="py-2 px-3 bg-black text-[#fff] uppercase mt-5">Mua ngay</Link>
                    </div>
                </div>
            </div>
        )}
    </div>
}

export default HomePage
