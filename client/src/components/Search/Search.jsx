/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
const Search = ({search , setOpenSearch, onClick}) => {
 
  const handleClose = () => {
    setOpenSearch(false)

  }
 
   const { data } = useFetch(`/products?filters[name][$contains]=${search}&populate=*`);
   
 
  return (
    <div
      className="search absolute w-full md:right-[11%] z-[999] h-[500px] overflow-y-scroll scrollbar-hidden bg-[#fff] px-5 py-3 shadow rounded md:w-[26%] "
      onClick={onClick}
    >
      <div className="tab flex items-center justify-between bg-[#f1f1f1]  py-1 px-2 rounded-xl">
        <h className="opacity-[.5]">Dynamically search items ...</h>

        <button
          className="cursor-pointer"
          onClick={handleClose}
          onTouchEnd={handleClose}
        >
          <AiOutlineClose size={24} color="red" />
        </button>
      </div>

      <div className="items">
        {data.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} onClick={handleClose}>
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
                <span className="text-[#1B4B66] font-semibold">
                  $
                  {Math.round(
                    item?.attributes?.price * (item?.attributes?.discount / 100)
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

 
}

export default Search
