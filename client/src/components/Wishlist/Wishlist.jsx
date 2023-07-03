/* eslint-disable react/prop-types */


import { Link } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/wishlistReducer';
import { addToCart } from '../../redux/cartReducer';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Wishlist = ({ openWishlist, setOpenWishlist }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.wishlist.products);

  const handleDispatch = () => {
    products.forEach((item) => {
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
          subDescription: item.subDescription,
          price: item.price,
          image: item.image,
          quantity,
        })
      );
    });

    if (products.length > 1) {
      toast.success('All items in the wishlist are added to your cart', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (products.length === 1) {
      toast.success(`${products[0].name} Added to your cart list`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    setOpenWishlist(!openWishlist);
  };

  const handleRemove = () => {
    dispatch(removeItem(products[0].id));
    toast.error(`${products[0].name} Remove From Wishlist`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

   
  };

  const handleCart = () => {
    setOpenWishlist(!openWishlist);
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" absolute z-[999] right-[8%] bg-[#fff] px-5 py-3 shadow rounded w-[25%] ">
      <div className="top font-semibold text-[#1B4B66] flex items-center justify-between">
        <button onClick={handleCart}>Back</button>
        <h1 className=" text-[20px]">My Wishlist</h1>
      </div>
      {products.length === 0 ? (
        <span className="text-center flex justify-center items-center mt-10 mb-10 text-[16px] opacity-[.3] font-semibold">
          Your wishlist is empty
        </span>
      ) : (
        products.map((item) => (
<div key={item.id} className="my-10 flex justify-between">
            <div className="left flex gap-x-5">
              <img
                className="w-[100px]"
                src={'http://localhost:1338' + item.image}
              />{' '}
              <div className="">
                <h1 className="font-semibold text-[#1B4B66] mb-2">
                  {item.name}
                </h1>
                <span className="text-[#626262]">{item.subDescription}</span>
                <div className="counter border mt-2 border-[#1B4B66] w-[100px] justify-between rounded-md flex items-center">
                  <button
                    className="px-2 text-[24px]"
                    onClick={() => {
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="px-2 text-[24px]"
                    onClick={() => {
                      setQuantity((prev) => prev + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="right flex flex-col justify-between items-end">
              <button>
                <AiOutlineClose onClick={handleRemove} />
              </button>
              <span className="font-medium text-[#1B4B66]">${item.price}</span>
            </div>
          </div>
        ))
      )}

      <hr />

      <div className="bottom my-10">
        <div className="coupon bg-[#F1F1F1] flex justify-between py-3 px-4 flex-[2] rounded-md">
          <input
            type="text"
            placeholder="Apply Valid Pincode"
            className="bg-transparent  focus:outline-none"
          />
          <button className="text-[#1B4B66] font-semibold uppercase">
            Check
          </button>
        </div>
        <button
          className="w-full flex justify-center items-center gap-x-5 text-center mt-4  py-2 bg-[#1B4B66] text-[#fff] rounded-md"
          onClick={handleDispatch}
        >
          <AiOutlineShopping size={24} /> Add To Bag
        </button>
        <Link to={'/categories/1'}>
          <button
            className="w-full text-center mt-5 text-[14px]  text-[#1B4B66] underline rounded-md"
            onClick={handleCart}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
