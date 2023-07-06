

const NavStyle =
{
  nav: `hidden md:px-8 py-5 md:flex md:justify-between md:items-center md:block `,

  left: `flex gap-x-5`,

  navlinks: `flex gap-x-4 text-[14px] bg-red `,

  li: `cursor-pointer hover:text-gray-600 transition-all duration-200 ease-in-out`,

  right: `flex gap-x-5 items-center`,

  inputField: `bg-none px-2  w-[300px] rounded flex items-center   bg-[#F1F1F1]`,

  input: `bg-transparent indent-2 w-full py-3 focus:outline-none placeholder:text-[14px]`,

  icons: `flex gap-x-5`,

  cart: `relative `,

  count: `absolute bg-[#FF8C4B] text-[8px] px-1 rounded-[50px] top-[0] right-[0]`,


  // Mobile 

  navM: ` px-2 py-5  md:hidden `,

  leftM: `flex flex-col gap-x-5`,

  navlinksM: `hidden flex flex-col text-[14px]  `,
  
  navlinksOpen: `flex flex-col my-7 p-3 gap-4 text-[14px] transform translate-x-0 transition-all duration-300 ease-in-out `,

  liM: `cursor-pointer hover:text-gray-600 transition-all px-3 duration-200 ease-in-out`,

  rightM: `flex flex-col gap-5 mt-5  `,

  inputFieldM: `bg-none px-2  w-[100%] rounded flex items-center   bg-[#F1F1F1]`,

  inputM: `bg-transparent indent-2 w-full py-3 focus:outline-none placeholder:text-[14px]`,

  iconsM: `flex justify-evenly`,

  cartM: `relative `,

  countM: `absolute bg-[#FF8C4B] text-[8px] px-1 rounded-[50px] top-[0] right-[0]`,

 

}



export default NavStyle