
const cardStyle = {
  card: `w-[286px] rounded-[50px]`,
  img: `rounded-[16px] w-[284px] h-[290px] object-contain`,
  desc: `py-2`,
  title: `flex items-center justify-between pb-3`,
  ratings: `flex gap-x-5 pb-2`,
  price: `flex items-center gap-x-3 mt-2`,
  newPrice: `font-semibold`,
  oldPrice: `text-[14px] line-through `,
  discount: `text-red-500`,

  //style for the cards in the collection section

  cardT: `relative`,
  bg: `absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#03181A50] bg-opacity-[.5] rounded-[16px] `,
  h1: `text-[18px] absolute bottom-5 left-4 font-semibold`,
};

export default cardStyle