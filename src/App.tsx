import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/layout/Home'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import ProductItem from './pages/ProductItem'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './components/layout/Admin'
import AdminFetch from './components/admin/AdminFetch'
import AdminAdd from './components/admin/AdminAdd'
import AdminUpdate from './components/admin/AdminUpdate'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/product' element={<Products />}>
              <Route path='theloai/:id' element={<ProductItem />}></Route>
            </Route>
            <Route path='/product/detail/:id' element={<ProductDetail />}></Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminFetch />}></Route>
            <Route path='add' element={<AdminAdd />}></Route>
            <Route path='update/:id' element={<AdminUpdate />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
