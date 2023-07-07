import  { useState } from 'react';
import accordStyle from '../../components/Accordion/AccordStyle';
import { BiMinus, BiPlus } from 'react-icons/bi';

const AccDIon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="accordion ">
        <div className={accordStyle.toggler} onClick={toggleAccordion}>
          <h3 className="text-lg font-semibold text-[#1B4B66]">
            Contact Information
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
            <div className="flex items-center space-x-2 rounded p-2">
              <form className='w-full'>
                <div className="top flex flex-col items-center md:gap-x-16 mt-4 md:flex-row">
                  <div className="name w-full ">
                    <label htmlFor="name">Full Name</label>
                    <div className="input  bg-gray-100 px-3 py-2 rounded mt-1">
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        className="focus:outline-none bg-transparent w-full"
                      />
                    </div>
                  </div>
                  <div className="tel w-full mt-5 md:mt-0">
                    <label htmlFor="tel">Mobile Number</label>
                  
                      <div className="input bg-gray-100 px-3 py-2 rounded mt-1">
                        <input
                          id="tel"
                          type="tel"
                          placeholder="+233xxxxxxxxx"
                          className="focus:outline-none bg-transparent w-full "
                        />
                      </div>
                   
                  </div>
                </div>
                <div className="top flex flex-col items-center gap-x-16 my-8 md:flex-row">
                  <div className="street w-full ">
                    <label htmlFor="street">Street Address</label>
                    <div className="input bg-gray-100 px-3 py-2 rounded mt-1">
                      <input
                        id="street"
                        type="text"
                        placeholder="Enter Address"
                        className="focus:outline-none bg-transparent w-full"
                      />
                    </div>
                  </div>
                  <div className="state w-full mt-5 md:mt-0 ">
                    <label htmlFor="state">State</label>
                    <div className="input bg-gray-100 px-3 py-2 rounded mt-1">
                      <input
                        id="state"
                        type="text"
                        placeholder="Enter State"
                        className="focus:outline-none bg-transparent w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="top flex flex-col items-center gap-x-16 md-flex-row ">
                  <div className="city w-full ">
                    <label htmlFor="city">City/Province</label>
                    <div className="input bg-gray-100 px-3 py-2 rounded mt-1">
                      <input
                        id="city"
                        type="text"
                        placeholder="Enter City/Province"
                        className="focus:outline-none bg-transparent w-full"
                      />
                    </div>
                  </div>
                  <div className="pin w-full mt-5 md:mt-0">
                    <label htmlFor="pin">Pin Code</label>
                    <div className="input  bg-gray-100 px-3 py-2 rounded mt-1">
                      <input
                        id="pin"
                        type="text"
                        placeholder="Enter Pin Code"
                        className="focus:outline-none bg-transparent w-full"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccDIon;
