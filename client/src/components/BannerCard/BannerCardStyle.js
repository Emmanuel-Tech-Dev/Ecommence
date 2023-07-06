const cardStyle = {
    top : `relative` ,
    left : `relative` ,
    right : `relative` ,

    img : `
           w-[100%]
           h-[230px]
           md:h-[400px] 
           rounded-[16px] 

          ` , 

   text : `absolute 
           top-[40%]
           px-4
   md:top-[40%] 
           md:px-8 
           text-[#97451F]
           transform 
           -translate-y-[50px]
           ` ,

   h4 : `
         font-thin 
         md:text-[26px]
         text-[18px]
         ` , 

   h1 : `font-bold text-[26px] md:text-[52px] md:w-[70%]` , 
   button : `bg-[#A7867790] mt-2 w-[50px] h-[50px] flex items-center justify-center rounded-[50px]` , 

   //bottom styling 

   bottom: `flex flex-col  justify-end  gap-6 mt-6 md:flex-row  ` , 
    img2 : `w-[3000px] h-[230px] md:h-[268px] rounded-[16px] ` ,
      text2 : `absolute w-[30%] top-[40%] md:top-[40%] px-2 md:right-8 right-14  transform -translate-y-[50px]` ,
   h1l : `font-bold text-[26px] md:text-[40px] text-[#A53F64]` , 
   h1r : `font-bold text-[26px] md:text-[40px] text-[#1B4B66]` , 
     buttonr : `bg-[#A53F6430] mt-2  w-[50px] h-[50px] text-[#A53F64] flex items-center justify-center rounded-[50px]` , 
     buttonl : `bg-[#1B4B6630] mt-2 w-[50px] h-[50px] text-[#1B4B66] flex items-center justify-center rounded-[50px]` , 

   

}

export default cardStyle