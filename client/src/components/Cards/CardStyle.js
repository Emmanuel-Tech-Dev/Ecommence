
const cardStyle = {
  card: `w-[200px] md:w-[286px] rounded-[50px]  mx-auto`,
  img: `rounded-[16px] max-w-[100%] h-[290px] object-contain`,
  desc: ` py-2 mt-2 md:py-2`,
  title: `flex items-center justify-between pb-3`,
  ratings: `flex justify-between pb-2`,
  price: `flex items-center gap-x-3 mt-2`,
  newPrice: `font-semibold`,
  oldPrice: `text-[14px] line-through `,
  discount: `text-red-500`,

  //style for the cards in the collection section

  cardT: `relative w-[220px] md:w-[284px] rounded mx-auto`,
  img2: `  rounded-[16px]`,
  bg: `absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#03181A50] bg-opacity-[.5] rounded-[16px] `,
  h1: `text-[18px] absolute bottom-5 left-4 font-semibold`,

  listcard: `w-[160px] md:w-[286px] rounded-[50px] `,
  listimg: `rounded-[16px] max-w-full h-[160px] md:h-[290px] object-contain`,
  listdesc: `py-2`,
  listtitle: `flex items-center justify-between pb-3 text-[14px] md:text-[16px]`,
  listratings: `flex justify-between pb-2`,
  listprice: `flex items-center gap-x-3 mt-2 text-[12px] md:text-[16px]`,
  listnewPrice: `font-semibold`,
  listoldPrice: `text-[14px] line-through `,
  listdiscount: `text-red-500 text-[12px] md:text-[16px]`,
};

export default cardStyle