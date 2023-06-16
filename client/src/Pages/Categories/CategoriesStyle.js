
const catStyle = {

    container : `px-6 py-8` ,
    top: `relative`,
    img: `w-[100%] h-[400px] rounded-[24px]` ,
    text : `absolute text-[72px] top-[40%] right-[30px] px-8  transform -translate-y-[50px]` ,
    h1: `font-extrabold` , 
    h4: `font-light` , 

    // bottom styling 

    bottom: `flex gap-x-10 py-20` ,
    left:`flex-[1] sticky top-5 h-[100%]`,
    right: `flex-[3]`,
    tabs : `
         flex 
         justify-between
         items-center  
         mb-8
    ` , 

    leftSm : `
           flex 
           gap-x-5
    ` , 

    rightSm : `
        flex
        gap-x-56 
        items-center  
    ` , 

    select: `
         px-4
         py-2
         bg-[#F1F1F1]
         rounded

         focus:outline-none
         ` ,

}

export default catStyle