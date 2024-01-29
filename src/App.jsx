import { useState } from 'react'
 
import './App.css'
import Navbar from './component /Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Products from '../Pages/Products/Products'
import ProductDet from '../Pages/ProductsDetails/ProductDetails'
import About from '../Pages/About /About'
import Home from '../Pages/Home/Home'
import AddProduct from '../Pages/AddProducts/AddProdcut'
import Login from '../Pages/LoginPage/Login'
import RouteProtuction from './component /Rootprotection'



function App() {
const NavbarElem=[{name:"Home",url:"/"},{name:"Products",url:"/Products"},{name:"About us",url:"/About"},{name:"Add product",url:"/Products/add"}]
  return (
    <>
    <Navbar NavbarElem={NavbarElem} Logo={"/Logo.png"}/>
    <Routes>
      <Route element={<About/>} path='/About'/>
      <Route element={<Products/>} path='/Products'/>
      <Route element={<ProductDet/>} path='/Products/:id'/>
      <Route element={<RouteProtuction redirect="/Login"><AddProduct/></RouteProtuction>} path='/Products/add'/>
      <Route element={<Login/>} path='/Login'/>
      <Route element={<Home/>} path='/'/>
    </Routes>
  </>)
}

export default App
