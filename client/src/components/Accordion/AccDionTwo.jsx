import  { useState } from 'react';
import accordStyle from '../../components/Accordion/AccordStyle';
import { BiMinus, BiPlus } from 'react-icons/bi';
import Payment from '../Payment/Payment';
import CreditCard from '../Payment/CreditCard';
import ApplePay from '../Payment/ApplePay'
import Amazon from '../Payment/Amazon'


const AccDionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isCheck, setIsCheck] = useState({
    radio1: false,
    radio2: false,
    radio3: false,
    radio4: false,
  });

  const handleCheck = (inputName) => {
    setIsCheck(() => ({
      radio1: inputName === 'radio1',
      radio2: inputName === 'radio2',
      radio3: inputName === 'radio3',
      radio4: inputName === 'radio4',
    }));
  };
  return (
    <div className="mt-10">
      <div className="accordion">
        <div className={accordStyle.toggler} onClick={toggleAccordion}>
          <h3 className="text-lg font-semibold text-[#1B4B66]">
            Payment Method
          </h3>
          <span
            className={`transform transition-all duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            {isOpen ? <BiMinus size={24} /> : <BiPlus size={24} />}
          </span>
        </div>
        {isOpen ? (
          <div
            className={`px-4 py-2 max-h-full opacity-100 transition-all duration-300 overflow-hidden`}
          >
            <div className="card flex justify-between mt-4">
              <label
                htmlFor="radio-1"
                className={
                  !isCheck.radio1
                    ? '  border border-gray-100 w-[130px] h-[120px] p-2 rounded hover:bg-[#1B4B6605] transition-all duration-300 ease-in-out'
                    : 'bg-[#1B4B6611]  border border-gray-100 w-[130px] h-[120px] p-2 rounded '
                }
              >
                <input
                  id="radio-1"
                  type="radio"
                  value=""
                  name="card"
                  onChange={() => handleCheck('radio1')}
                  checked={isCheck.radio1}
                  className="w-4 h-4 text-[#1B4B66] bg-gray-100 flex float-right focus:outline-none border-gray-300 focus:ring-[#1B4B66]"
                />
                <div className="wrap mt-7 flex flex-col items-center gap-y-3 justify-center">
                  <img src="../images/upi.png" />
                  <span className="text-[12px] font-semibold opacity-[.6] ">
                    UPI
                  </span>
                </div>
              </label>
              <label
                htmlFor="radio-2"
                className={
                  !isCheck.radio2
                    ? '  border border-gray-100 w-[130px] h-[120px] p-2 rounded hover:bg-[#1B4B6605] transition-all duration-300 ease-in-out'
                    : 'bg-[#1B4B6611]  border border-gray-100 w-[130px] h-[120px] p-2 rounded '
                }
              >
                {' '}
                <input
                  id="radio-2"
                  type="radio"
                  value=""
                  name="card"
                  onChange={() => handleCheck('radio2')}
                  checked={isCheck.radio2}
                  className="w-4 h-4 text-[#1B4B66] bg-gray-100 flex float-right focus:outline-none border-gray-300 focus:ring-[#1B4B66]"
                />
                <div className="wrap mt-6 flex flex-col items-center gap-y-3 justify-center">
                  <img src="../images/card.png" />

                  <span className="text-[12px] font-semibold opacity-[.6] ">
                    Credit/Debit Card
                  </span>
                </div>
              </label>
              <label
                htmlFor="radio-3"
                className={
                  !isCheck.radio3
                    ? '  border border-gray-100 w-[130px] h-[120px] p-2 rounded hover:bg-[#1B4B6605] transition-all duration-300 ease-in-out'
                    : 'bg-[#1B4B6611]  border border-gray-100 w-[130px] h-[120px] p-2 rounded '
                }
              >
                <input
                  id="radio-3"
                  type="radio"
                  value=""
                  name="card"
                  onChange={() => handleCheck('radio3')}
                  checked={isCheck.radio3}
                  className="w-4 h-4 text-[#1B4B66] bg-gray-100 flex float-right focus:outline-none border-gray-300 focus:ring-[#1B4B66]"
                />
                <div className="wrap mt-5 flex flex-col items-center gap-y-2 justify-center">
                  <img className="mix-blend-color" src="../images/qpay.png" />
                  <span className="text-[12px] font-semibold opacity-[.6] ">
                    Apple Pay
                  </span>
                </div>
              </label>

              <label
                htmlFor="radio-4"
                className={
                  !isCheck.radio4
                    ? '  border border-gray-100 w-[130px] h-[120px] p-2 rounded hover:bg-[#1B4B6605] transition-all duration-300 ease-in-out'
                    : 'bg-[#1B4B6611]  border border-gray-100 w-[130px] h-[120px] p-2 rounded '
                }
              >
                <input
                  id="radio-4"
                  type="radio"
                  value=""
                  name="card"
                  onChange={() => handleCheck('radio4')}
                  checked={isCheck.radio4}
                  className="w-4 h-4 text-[#1B4B66] bg-gray-100 flex float-right focus:outline-none border-gray-300 focus:ring-[#1B4B66]"
                />
                <div className="wrap mt-5 flex flex-col items-center gap-y-3 justify-center">
                  <img src="../images/amazonpay.png" />
                  <span className="text-[12px] font-semibold opacity-[.6] ">
                    Amazon Pay
                  </span>
                </div>
              </label>
            </div>
           {isCheck.radio1 &&  <Payment/>}
           {isCheck.radio2 &&  <CreditCard/>}
           {isCheck.radio3 &&  <ApplePay/>}
           {isCheck.radio4 &&  <Amazon/>}
          </div>
        
        


        ) : null}
      </div>
    </div>
  );
};

export default AccDionTwo;
