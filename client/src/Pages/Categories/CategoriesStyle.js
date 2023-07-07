
const catStyle = {
  container: `px-2 md:px-6 py-8`,
  top: `relative`,
  img: `w-[100%] md:h-[400px] rounded-[24px]`,
  text: `absolute md:text-[72px] top-[50%] md:top-[40%] right-[30px] px-8  transform -translate-y-[50px]`,
  h1: `font-extrabold`,
  h4: `font-light`,

  // bottom styling

  bottom: `w-full flex justify-between gap-x-10 items-baseline py-5`,
  left: ` hidden md:flex-[1] sticky md:top-5 h-[100%] md:block`,
  right: `w-full md:flex-[3]`,
  tabs: `
         flex 
         justify-between
         items-center  
         my-8
         md:mb-8
         mb:my-0
         sticky 
         top-0
         md:h-[2%]
         bg-[#fff]
         md:py-10
         py-3
         
    `,

  leftSm: `
           flex 
           gap-x-2
           md:gap-x-5
           items-center
          
    `,

  rightSm: `
        flex
        md:gap-x-56 
        items-center  
        flex-wrap
         justify-center
         
    `,

  select: `
         px-4
         py-2
         bg-[#F1F1F1]
         rounded
         focus:outline-none
        
         `,
};

export default catStyle