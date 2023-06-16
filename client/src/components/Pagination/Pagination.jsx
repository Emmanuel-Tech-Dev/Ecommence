import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
const Pagination = () => {
  return (
   <div className="flex">
  <nav aria-label="Pagination">
    <ul className="inline-flex items-center -space-x-px rounded-md text-sm shadow-sm">
     <div className="page-contain flex bg-[#F1F1F1] p-1 rounded-md">
          <li>
        <a href="#" aria-current="page" className="z-10 inline-flex items-center rounded-md  bg-[#1B4B66] px-6 py-2 font-medium text-[#fefe]">1 </a>
      </li>
      <li>
        <a href="#" className="inline-flex items-center px-6 py-2 text-gray-500 hover:bg-gray-50">2 </a>
      </li>
      <li>
        <span className="inline-flex items-center  rounded-md px-6 py-2 text-gray-700">3 </span>
      </li>
      <li>
        <a href="#" className="inline-flex items-center  px-6 py-2 text-gray-500 hover:bg-gray-50">4 </a>
      </li>
      <li>
        <a href="#" className="inline-flex items-center  px-6 py-2 text-gray-500 hover:bg-gray-50">5 </a>
      </li>
     </div>
    
      <li>
        <button href="#" className="inline-flex ml-5 items-center space-x-2 rounded-r-md  rounded-md bg-[#F1F1F1] px-6 py-3 font-medium text-gray-500 hover:bg-gray-50">
          <span>Next</span>
          <IoIosArrowForward/>
        </button>
      </li>
    </ul>
  </nav>
</div>
  )
}

export default Pagination
