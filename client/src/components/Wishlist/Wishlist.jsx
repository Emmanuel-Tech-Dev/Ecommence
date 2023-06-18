import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineShopping } from 'react-icons/ai'

const Wishlist = () => {

   const [quantity, setQuantity] = useState(1);
   const [price, setPrice] = useState(500); // Initial price, replace with your actual price
   const [previousPrice, setPreviousPrice] = useState(price); // Store the previous price

   const handleAdd = () => {
     const totalPrice = previousPrice * quantity; // Multiply the previous price by the quantity
     setPrice(totalPrice);
   };

   const handleSubtract = () => {
     setPrice(previousPrice); // Revert the price to its previous value
   };

   useEffect(() => {
     setPreviousPrice(price); // Update the previous price whenever the price changes
   }, [price]);

  return (
    <div className=" absolute z-[999] right-[8%] bg-[#fff] px-5 py-3 shadow rounded w-[25%] ">
      <div className="top font-semibold text-[#1B4B66] flex items-center justify-between">
        <button>Back</button>
        <h1 className=" text-[20px]">My Wishlist</h1>
      </div>

      <div className="my-10 flex justify-between">
        <div className="left flex gap-x-5">
          <img className="w-[100px]" src="../images/pink-bag.png" />
          <div className="">
            <h1 className="font-semibold text-[#1B4B66] mb-2">Coach</h1>
            <span className="text-[#626262]">Leather Coach Bag</span>
            <div className="counter border mt-2 border-[#1B4B66] w-[100px] justify-between rounded-md flex items-center">
              <button
                className="px-2 text-[24px]"
                onClick={() => {
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                  handleSubtract;
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 text-[24px]"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                  handleAdd();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="right flex flex-col justify-between items-end">
          <button>x</button>
          <span className="font-medium text-[#1B4B66]">${price}</span>
        </div>
      </div>

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
        <button className="w-full flex justify-center items-center gap-x-5 text-center mt-4  py-2 bg-[#1B4B66] text-[#fff] rounded-md">
          <AiOutlineShopping size={24} /> Add To Bag
        </button>
        <Link to={'/categories/1'}>
          <button className="w-full text-center mt-5 text-[14px]  text-[#1B4B66] underline rounded-md">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Wishlist
