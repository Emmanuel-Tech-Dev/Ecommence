import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import accordStyle from './AccordStyle';
import useFetch from '../../hooks/usefetch';

const Accordion = ({ title, id , label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useFetch(`/products?field=${label}`);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={accordStyle.container}>
      <div className={accordStyle.toggler} onClick={toggleAccordion}>
        <h3 className="text-lg font-semibold">{title}</h3>
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
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                id={item.id}
                name="checkGroup1"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label htmlFor={item.id} className="flex w-full space-x-2 text-sm">
                {' '}
              {item?.attributes?.[label]}{' '}
              </label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
