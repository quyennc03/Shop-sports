import { Outlet } from 'react-router-dom'
const Products = () => {
    return <div className="w-full">
        <div className="max-w-[1280px] mx-auto flex justify-between">
            <aside className="w-[300px] py-5 flex-shrink-0">
                <h1 className="text-[18px] font-bold mt-5">Lọc theo giá</h1>
                <ul className="text-[#000] text-[14px]">
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Giảm dần</li>
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Tăng dần</li>
                </ul>
                <h1 className="text-[18px] font-bold mt-5">Màu sắc</h1>
                <ul className="text-[#000] text-[14px]">
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Xanh</li>
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Đỏ</li>
                </ul>
                <h1 className="text-[18px] font-bold mt-5">Thể loại</h1>
                <ul className="text-[#000] text-[14px]">
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Bóng</li>
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Quần áo</li>
                    <li className="mt-1 hover:text-red-500 cursor-pointer">Phụ kiện</li>
                </ul>
            </aside>
            <Outlet />
        </div>
    </div>
}

export default Products
