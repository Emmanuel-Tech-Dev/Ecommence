/* eslint-disable react/prop-types */

import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
const Search = ({search , setSearch , onClick}) => {
 
 
   const { data } = useFetch(`/products?filters[name][$contains]=${search}&populate=*`);
   
   

  return (
    <div
      className="absolute w-full md:right-[11%] z-[999] h-[500px] overflow-y-scroll bg-[#fff] px-5 py-3 shadow rounded md:w-[25%] "
      onClick={onClick}
    >
      <h className="opacity-[.5]">Recent searched items ...</h>
      <div className="tabs flex items-center justify-between gap-y-2 flex-wrap mt-2">
        <div className="tab flex items-center gap-4 bg-[#f1f1f1] w-fit py-1 px-2 rounded-xl">
          <span className="text-[14px]">item.search</span>
          <button className="cursor-pointer">
            <AiOutlineClose size={14} color="red" />
          </button>
        </div>
      </div>

      <div className="items">
        {data.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="my-10 flex justify-between">
              <div className="left flex gap-x-5">
                <img
                  className="w-[100px]"
                  src={
                    'http://localhost:1338' +
                    item?.attributes?.image?.data[0]?.attributes?.url
                  }
                />
                <div className="">
                  <h1 className="font-semibold text-[#1B4B66] mb-2">
                    {item?.attributes?.name}
                  </h1>
                  <span className="text-[#626262]">
                    {item?.attributes?.subDescription}
                  </span>
                 
                </div>
              </div>
              <div className="right flex flex-col justify-between items-end">
                
                <span className="text-[#1B4B66] font-semibold">{item?.attributes??.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

 
}

export default Search
