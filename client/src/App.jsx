import { useState } from 'react'

import { createBrowserRouter , RouterProvider , Outlet , Link} from 'react-router-dom'

//importing components
import Home from './Pages/Home/Home'
import Category from './Pages/Categories/Categories'
import Product from './Pages/Products/Product'
import CheckoutInfo from './Pages/CheckoutInfo/CheckoutInfo'
import Payment from './Pages/CheckoutPayment/Payment'
import About from './Pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
 
  const Layout = () => {
      
    return (
      <div className="app">
        <Navbar/>
    
        <Outlet/>
        <Footer/>
      </div>
    )

  }

// creating a routing 
const router = createBrowserRouter([
  
  { 
    path: '/',
    element: <Layout/>,
    children : [
  {
    path: '/',
    element : <Home/>
  } ,
  {
    path: '/categories/:id',
    element : <Category/>
  },
   {
    path: '/product/:id',
    element :<Product/>
  }, {
    path: '/checkout/information',
    element :<CheckoutInfo/>
  }, {
    path: '/checkout/payment',
    element :<Payment/>
  }, {
    path: '/about',
    element :<About/>
  },

    ]
  },

])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
