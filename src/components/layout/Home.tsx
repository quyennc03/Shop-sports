import { Outlet, Link } from 'react-router-dom'
const Home = () => {
    return <>
        <header className=''>
            <div className="h-[55px] bg-[#F5F5F5]">
                <div className="max-w-[1024px] mx-auto flex justify-between items-center h-full text-sm">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <p>Đam mê thể thao</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>

                        <p>Giao hàng toàn quốc</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>

                        <p>Gọi cho tôi: <span>0967-584-597</span></p>
                    </div>
                </div>
            </div>
            <div className="h-[77px] flex items-center w-full px-10 justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="../../public/images/logo.png" className='w-[70px] flex-shrink-0' alt="" />
                    </Link>
                    <div className="relative min-w-[500px]">
                        <input type="text" className='w-full px-5 py-2 rounded-xl bg-[#F5F5F5] ml-8 border-none' placeholder='Tim kiem ...' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute top-[50%] right-[0] translate-y-[-50%]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            </div>
            <nav className='bg-[#F5F5F5] h-[55px]'>
                <ul className="flex uppercase text-[12px] font-bold items-center h-full justify-start max-w-[1280px] mx-auto">
                    <li className='px-[24px] leading-[52px] hover:text-red-400 cursor-pointer'>Basketball</li>
                    <li className='px-[24px] leading-[52px] hover:text-red-400 cursor-pointer'>Running</li>
                    <li className='px-[24px] leading-[52px] hover:text-red-400 cursor-pointer'>Tennis</li>
                    <li className='px-[24px] leading-[52px] hover:text-red-400 cursor-pointer'>Voleyball</li>
                    <li className='px-[24px] leading-[52px] hover:text-red-400 cursor-pointer'>Bowling</li>
                </ul>
            </nav>
        </header>
        <Outlet />
        <footer className='bg-black py-10 relative mt-40'>
            <div className="max-w-[1280px] mx-auto flex">
                <div className='text-[#fff]'>
                    <h1 className='text-xl font-bold uppercase'>Our Shop</h1>
                    <ul className='text-sm mt-3'>
                        <li className='py-1'>Sport.com</li>
                        <li className='py-1'>Peak.com</li>
                        <li className='py-1'>Jordan.com</li>
                    </ul>
                </div>
                <div className='text-[#fff] ml-20'>
                    <h1 className='text-xl font-bold uppercase'>Choose Sport</h1>
                    <ul className='text-sm mt-3'>
                        <li className='py-1'>Basketball</li>
                        <li className='py-1'>Running</li>
                        <li className='py-1'>Tennis</li>
                        <li className='py-1'>Voleyball</li>
                        <li className='py-1'>Bowling</li>
                    </ul>
                </div>
                <div className='text-[#fff] ml-20'>
                    <h1 className='text-xl font-bold uppercase'>Advice</h1>
                    <p className='text-[12px] mt-3'>Cửa hàng chúng tôi mở cửa lúc 9h A.M</p>
                    <div className="flex items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <div className="flex flex-col text-[12px]">
                            <p>Số điện thoại:</p>
                            <p>+84 967-584-597</p>
                        </div>
                    </div>
                    <h1 className='text-[14px] mt-4'>Hoặc liên hệ qua</h1>
                    <div className="flex mt-2">
                        <img src="../../public/images/contact/facebook.png" alt="" />
                        <img src="../../public/images/contact/instagram.png" className='ml-2' alt="" />
                        <img src="../../public/images/contact/tiktok.png" className='ml-2' alt="" />
                    </div>
                </div>
            </div>
            <img src="../../public/images/logo.png" className='w-[250px] float-right flex-shrink-0 absolute bottom-0 right-0' alt="" />
        </footer>
    </>

}

export default Home
