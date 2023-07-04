import { useState } from 'react';

const Payment = () => {

 const [isCheck, setIsCheck] = useState({
   radio1: false,
   radio2: false,
   radio3: false,
  
 });

 const handleCheck = (inputName) => {
   setIsCheck(() => ({
     radio1: inputName === 'radio1',
     radio2: inputName === 'radio2',
     radio3: inputName === 'radio3',
   
   }));
 };
    

  return (
    <div className="mt-10 border border-[#1B4B66] rounded">
      <div className="content">
        <div className="top">
          <label
            htmlFor="google"
            className={
              isCheck.radio1
                ? 'flex px-5 py-5 justify-between bg-[#1B4B6611]'
                : 'flex px-5 py-5 justify-between hover:bg-[#1B4B6604] transition-all duration-300 ease-in-out'
            }
          >
            <div className="div ">
              <div className="image flex items-center gap-x-4">
                <img src="../images/googlepay.png" alt="" />
                <span className="font-semibold text-[#1B4B66]">Google Pay</span>
              </div>
              {isCheck.radio1 && (
                <div className="mt-5">
                  <div className="top flex flex-col">
                    <input
                      type="text"
                      placeholder="Enter your UPI id"
                      className="py-1.5 indent-3 rounded border border-[#1B4B66] focus:outline-none"
                    />
                    <span className='my-2 text-[14px] opacity-[.5]'>Eg: 123456789</span>
                  </div>
                  <div className="bottom">
                    <label className='flex items-center gap-x-2'>
                      <input type="checkbox" />
                      <span>Save this for future transactions</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            <input
              id="google"
              type="radio"
              name="pay"
              onChange={() => handleCheck('radio1')}
              checked={isCheck.radio1}
            />
          </label>
        </div>{' '}
        <div className="top">
          <label
            htmlFor="phone"
            className={
              isCheck.radio2
                ? 'flex px-5 py-5 justify-between bg-[#1B4B6611]'
                : 'flex px-5 py-5 justify-between hover:bg-[#1B4B6604] transition-all duration-300 ease-in-out'
            }
          >
            <div className="div flex items-center gap-x-4">
              <img src="../images/PhonePe.png" alt="" />
              <span className="font-semibold text-[#1B4B66]">Phone Pe</span>
            </div>
            <input
              id="phone"
              type="radio"
              name="pay"
              onChange={() => handleCheck('radio2')}
              checked={isCheck.radio2}
            />
          </label>
        </div>{' '}
        <div className="top">
          <label
            htmlFor="paytm"
            className={
              isCheck.radio3
                ? 'flex px-5 py-5 justify-between bg-[#1B4B6611]'
                : 'flex px-5 py-5 justify-between hover:bg-[#1B4B6604] transition-all duration-300 ease-in-out'
            }
          >
            <div className="div flex items-center gap-x-4">
              <img src="../images/Paytm.png" alt="" />
              <span className="font-semibold text-[#1B4B66]">Paytm</span>
            </div>
            <input
              id="paytm"
              type="radio"
              name="pay"
              onChange={() => handleCheck('radio3')}
              checked={isCheck.radio3}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
