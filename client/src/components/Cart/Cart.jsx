import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
const Cart = () => {

  return (
    <div className=" absolute z-[999] right-8 bg-[#fff] px-5 py-3 shadow rounded w-[25%] ">
      <div className="top font-semibold text-[#1B4B66] flex items-center justify-between">
        <button>Back</button>
        <h1 className=" text-[20px]">My Cart List</h1>
      </div>

      <div className="my-10 flex justify-between">
        <div className="left flex gap-x-5">
          <img className="w-[100px]" src="../images/pink-bag.png" />
          <div className="">
            <h1 className="font-semibold text-[#1B4B66] mb-2">Coach</h1>
            <span className="text-[#626262]">Leather Coach Bag</span>
            <div className="counter mt-2  w-[100px] justify-between rounded-md flex items-center">
              <span className="text-[#1B4B66]">1 x $500</span>
            </div>
          </div>
        </div>
        <div className="right flex flex-col justify-between items-end">
          <button>
            <AiOutlineClose />
          </button>
          <span className="text-[#1B4B66] font-semibold">$500</span>
        </div>
      </div>

      <hr />

      <div className="bottom my-10">
        <div className="total">
          <div className="subtotal flex justify-between items-center">
            <h1>Subtotal:</h1>
            <span>$500</span>
          </div>
          <div className="text  flex justify-between items-center my-6">
            <h1 className="font-semibold text-[#1B4B66]">Tax:</h1>
            <span>$500</span>
          </div>
          <div className="total flex justify-between items-center mb-6 ">
            <h1 className="font-semibold text-[#1B4B66]">total:</h1>
            <span>$500</span>
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
