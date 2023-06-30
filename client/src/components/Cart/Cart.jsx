// import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
const Cart = () => {

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


  return (
    <div className=" absolute z-[999] right-8 bg-[#fff] px-5 py-3 shadow rounded w-[25%] ">
      <div className="top font-semibold text-[#1B4B66] flex items-center justify-between">
        <button>Back</button>
        <h1 className=" text-[20px]">My Cart List</h1>
      </div>
      {products.map((item) => (
        <div key={item.id} className="my-10 flex justify-between">
          <div className="left flex gap-x-5">
            <img
              className="w-[100px]"
              src={'http://localhost:1338' + item.image}
            />
            <div className="">
              <h1 className="font-semibold text-[#1B4B66] mb-2">{item.name}</h1>
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
            <button onClick={() => dispatch(removeItem(item.id))} className='cursor-pointer'>
              <AiOutlineClose />
            </button>
            <span className="text-[#1B4B66] font-semibold">
              ${item.price * item.quantity}
            </span>
          </div>
        </div>
      ))}

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
        <button className="w-full text-center mt-4  py-2 bg-[#1B4B66] text-[#fff] rounded-md">
          Place Order
        </button>
        <Link to={'/categories/1'}>
          <button className="w-full text-center mt-5 text-[14px]  text-[#1B4B66] underline rounded-md">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
