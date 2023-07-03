import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//importing components
import Home from './Pages/Home/Home';
import Category from './Pages/Categories/Categories';
import Product from './Pages/Products/Product';
import CheckoutInfo from './Pages/CheckoutInfo/CheckoutInfo';
import Payment from './Pages/CheckoutPayment/Payment';
import About from './Pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyCart from './Pages/My_cart/MyCart';

function App() {

  


  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  // Scroll to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  // creating a routing
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home  />,
        },
        {
          path: '/categories/:id',
          element: <Category />,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
        {
          path: '/mycart',
          element: <MyCart />,
        },
        {
          path: '/checkout/information',
          element: <CheckoutInfo />,
        },
        {
          path: '/checkout/payment',
          element: <Payment />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
