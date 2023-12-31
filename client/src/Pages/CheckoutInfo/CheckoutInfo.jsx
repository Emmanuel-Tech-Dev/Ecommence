import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import AccDIon from '../../components/Accordion/AccDIon';
import AccDionTwo from '../../components/Accordion/AccDionTwo';
import { useDispatch, useSelector } from 'react-redux';
import { reset , removeItem } from '../../redux/cartReducer';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';


const CheckoutInfo = () => {

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    const taxPercentage = Math.random() * 0.1 + 0.1;
    const taxAmount = total * taxPercentage.toFixed(2);
    products.forEach((item) => (total += item.quantity * item.price));
    const totalPrice = total + taxAmount;
    return totalPrice.toFixed(2);
  };

  const generateShortUUID = () => {
  const uuid = uuidv4();
  const shortUUID = uuid.replace(/-/g, '').substring(0, 7);
  return shortUUID;
};
const shortUUID = generateShortUUID();

// handling form data 

const [formData , setFormData] =useState({
  fullname:'',
  phoneNumber: '',
  streetAddress : '' , 
  state : '' , 
  city: '',
  zipcode:''

})

const handleFormChange = (e) => {
  const {name , value} = e.target
  setFormData((prevData) => {
   return {
    ...prevData , 
    [name] : value
   } 
  })
}

console.log(formData)



  const handlePlaceOrder = async () => {
  if(products.length > 0) {
 try {
      await axios.post(
      'http://localhost:1338/api/orders',
      {
        data : {
          totalItems : products.length , 
          totalAmount : totalPrice()  , 
          orderID :  shortUUID  ,
          customerName : formData.fullname , 
          customerNumber : formData.phoneNumber , 

        }
      }
    );
    
    if(products.length > 1) {
toast.success(
  `Order of ${products.length} items has been placed successfully. Wait for Delivery`,
  {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  }
);
    } else{
      toast.success(`Order of ${products.length} item has been placed successfully. Wait for Delivery`, {
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

      
    // Reset the cart or perform any other necessary actions
    dispatch(reset());
  } catch (error) {
    console.error(error.message);
    // Handle the error as per your requirement
  }
  }else {
   toast.error(
     `Order placement failed . No items in cart`,
     {
       position: 'top-center',
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: 'light',
     }
   );
  }
 
  };

 


  // console.log(postData)

  return (
    <div className="px-2 md:px-8 pb-10">
      <div className="heading mt-16 mb-10">
        <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
          <Link to={'/'}>
            <h1 className="opacity-[.4]">Home</h1>
          </Link>

          <IoIosArrowForward />
          <h1 className="opacity-[1] text-[#1B4B66]">Checkout Infomation</h1>
        </div>

        <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
          <h1>Checkout Infomation</h1>
        </div>
      </div>

      <div className="content flex flex-col  items-start gap-x-16 md:flex-row">
        <div className="left w-full flex-[1] md:flex-[3] ">
          <form className="w-[100%] md:w-[70%]">
            <AccDIon handleFormChange={handleFormChange} formData={formData} />

            <AccDionTwo handleFormChange={handleFormChange} />
            <div className="button flex flex-col-reverse items-center justify-between mt-24 text-white gap-5 md:flex-row">
              <Link className="" to={'/mycart/'}>
                <div className=" text-[#1B4B66] underline w-full font-semibold">
                  Back
                </div>
              </Link>

              <Link className="" to={`/checkout/information`}>
                <button
                  className="bg-[#1B4B66] px-10 rounded-md py-2"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="right flex-[1] w-full mt-24 md:mt-0">
          <div className="right flex-[1] md:sticky md:top-5 md:h-full">
            <h1 className="mb-1 text-[24px] font-semibold text-[#1B4B66]">
              Order Summary
            </h1>
            <hr />

            <div className="my-10 flex flex-col justify-between w-[100%]">
              {products.map((item) => (
                <div key={item.id} className="left flex gap-x-5 my-3">
                  <img
                    className="w-[100px] object-contain"
                    src={'http://localhost:1338' + item.image}
                  />
                  <div className="">
                    <h1 className="font-semibold text-[#1B4B66] mb-2">
                      {item.name}
                    </h1>
                    <span className="text-[#626262]">
                      {item.subDescription}
                    </span>
                    <div className="counter mt-2  w-[100px] justify-between rounded-md flex items-center">
                      <span className="text-[#1B4B66]">
                        {' '}
                        Qty - {item.quantity}
                      </span>
                    </div>
                    <div className="buttons mt-5 flex gap-6 font-semibold text-[14px]">
                      <button
                        className="text-red-500 underline"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="total mt-10 w-full ">
                <h1 className="mb-1 text-[24px] font-semibold text-[#1B4B66]">
                  Order Details
                </h1>
                <hr />
                <div className="subtotal mt-5 flex justify-between items-center">
                  <h1>Subtotal:</h1>
                  <span>${totalPrice()}</span>
                </div>
                <div className="text  flex justify-between items-center my-6">
                  <h1 className="font-semibold text-[#1B4B66]">Tax:</h1>
                  <span>$0</span>
                </div>
                <div className="total flex justify-between items-center mb-6 ">
                  <h1 className="font-semibold text-[#1B4B66]">total:</h1>
                  <span>${totalPrice()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default CheckoutInfo;
