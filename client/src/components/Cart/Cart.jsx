/* eslint-disable react/prop-types */
// import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { toast } from 'react-toastify';


const Cart = ({setOpen , open}) => {

  const products = useSelector(state=>state.cart.products)
const dispatch = useDispatch()
 

const totalPrice = () => {
let total = 0;
const taxPercentage = Math.random() * 0.1 + 0.1;
const taxAmount = total * taxPercentage.toFixed(2);

  products.forEach((item) => (total += item.quantity * item.price));

  const totalPrice = total + taxAmount;

  return totalPrice.toFixed(2);
};


const handleCart = () => {
   setOpen(!open)
}

const handleCartTimeOut = () => { 
  setOpen(!open)
}

  const handleRemove = () => {
    dispatch(removeItem(products[0].id));
    toast.error(`${products[0].name} Remove From Cart List`, {
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

console.log(!open)

  return (
    <div className=" absolute z-[9999] w-full  md:right-8 bg-[#fff] px-5 py-3 shadow rounded md:w-[25%] ">
      <div className="top font-semibold text-[#1B4B66] flex items-center justify-between">
        <button onClick={handleCart}>Back</button>
        <Link to={`/mycart`}>
          <h1 className=" text-[20px]" onClick={handleCart}>
            My Cart List
          </h1>
        </Link>
      </div>

      {products.length === 0 ? (
        <span className="text-center flex justify-center items-center mt-10 mb-10 text-[16px] opacity-[.3] font-semibold">
          Your Cartlist is empty
        </span>
      ) : (
        products.map((item) => (
          <div key={item.id} className="my-10 flex justify-between">
            <div className="left flex gap-x-5">
              <img
                className="w-[100px]"
                src={'http://localhost:1338' + item.image}
              />
              <div className="">
                <h1 className="font-semibold text-[#1B4B66] mb-2">
                  {item.name}
                </h1>
                <span className="text-[#626262]">{item.subDescription}</span>
                <div className="counter mt-2  w-[100px] justify-between rounded-md flex items-center">
                  <span className="text-[#1B4B66]">
                    {' '}
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="right flex flex-col justify-between items-end">
              <button onClick={handleRemove} className="cursor-pointer">
                <AiOutlineClose size={20} color="red" />
              </button>
              <span className="text-[#1B4B66] font-semibold">
                ${item.price * item.quantity}
              </span>
            </div>
          </div>
        ))
      )}

      <hr />

      <div className="bottom my-10">
        <div className="total">
          <div className="subtotal flex justify-between items-center">
            <h1>Subtotal:</h1>
            <span>${totalPrice()}</span>
          </div>
          <div className="text  flex justify-between items-center my-6">
            <h1 className="font-semibold text-[#1B4B66]">Tax:</h1>
            <span>${}</span>
          </div>
          <div className="total flex justify-between items-center mb-6 ">
            <h1 className="font-semibold text-[#1B4B66]">total:</h1>
            <span>${totalPrice()}</span>
          </div>
        </div>
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
        <Link to={'/checkout/information'}>
          <button
            className="w-full text-center mt-4  py-2 bg-[#1B4B66] text-[#fff] rounded-md"
            onClick={handleCartTimeOut}
          >
            Place Order
          </button>
        </Link>

        <Link to={'/categories/1'}>
          <button
            className="w-full text-center mt-5 text-[14px]  text-[#1B4B66] underline rounded-md"
            onClick={handleCartTimeOut}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
