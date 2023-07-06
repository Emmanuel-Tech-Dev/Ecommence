const productStyle = {

   container : `
         md:px-8 
         px-2
   ` , 

   content : `
        flex
        flex-col
        gap-10
        mt-10
        md:flex-row

   ` , 

   left : `
        flex-[1]
   ` , 

   thumnails: `
     flex
     justify-center
     items-center
     gap-x-5
     md:gap-x-10

     my-5

   ` ,

   right: `
        flex-[1]
   ` ,

price: `flex items-center gap-x-6 mb-5 font-semibold` ,
   newPrice : ` text-[40px]`,
   oldPrice : `text-[26px] line-through text-[#B6B6B6] `,
   discount : `text-red-500 text-[24px]`,
}


export default productStyle