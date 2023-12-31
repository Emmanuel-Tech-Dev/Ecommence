import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productStyle from './ProductStyle';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import Card from '../../components/Cards/Card';
import useFetch from '../../hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { addToWishlist } from '../../redux/wishlistReducer';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = () => {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.57,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState('image');
  const [quantity, setQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState('description');

  const handleSetActiveButton = (button) => {
    setActiveButton(button);
  };

  const limitNumRange = (number) => {
    const results = (number % 4) + 1;
    return results;
  };

  const { data } = useFetch(`products/${id}?populate=*`);
  
  // calclating for price discount
  const oldPrice = data?.attributes?.price;
  const discount = data?.attributes?.discount;
  const discountPrice = Math.round(oldPrice * (discount / 100));

  // fetching data for the taps 
  const { newData } = useFetch(`/products?_limit=4&populate=*`);

  // filter the data to the four(4) latest  published data
  const filterProducts = newData
    .slice()
    .reverse()
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
    );

  
    const dispatch = useDispatch();

  const handleAddToCart = () => {
   dispatch(
     addToCart({
         id: data.id,
         name: data.attributes.name,
         subDescription: data.attributes.subDescription,
         price: discountPrice,
         image: data.attributes.image.data[0].attributes.url,
         quantity,
       })
     );

     toast.success(data.attributes.name +' Added To Your Cart', {
       position: 'top-center',
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: 'light',
     });

  }

  const handleToWishlist = () => {
  dispatch(
    addToWishlist({
      id: data.id,
      name: data.attributes.name,
      subDescription: data.attributes.subDescription,
      image: data.attributes.image.data[0].attributes.url,
      price: discountPrice,
    })
  );
toast.success(data.attributes.name + ' Added To Your Wishlist', {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
});

  }





  return (
    <div className={productStyle.container}>
      <div className="heading mt-10 mb-16">
        <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
          <Link to={'/'}>
            <h1 className="opacity-[.4]">Home</h1>
          </Link>

          <IoIosArrowForward />
          <Link to={`/categories/${limitNumRange(id)}`}>
            <h1 className="opacity-[.4] text-[#1B4B66]">
              {data?.attributes?.categories?.data[0]?.attributes?.title}
            </h1>
          </Link>

          <IoIosArrowForward />
          <h1 className="opacity-[1] text-[#1B4B66]">
            {data?.attributes?.name}
          </h1>
        </div>
      </div>

      <div className={productStyle.content}>
        <div className={productStyle.left}>
          <img
            className="w-[100%] md:h-[600px] rounded-[16px]"
            src={
              'http://localhost:1338' +
              data?.attributes?.[selectedImg]?.data[0]?.attributes?.url
            }
          />
          <div className={productStyle.thumnails}>
            <img
              className="w-[60px] md:w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[60px] md:w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[60px] md:w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[60px] md:w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
          </div>
        </div>
        <div className={productStyle.right}>
          <h1 className="text-[34px] text-[#13101E] font-semibold">
            {data?.attributes?.name}
          </h1>
          <h5 className="text-[20px] text-[#626262] font-semibold py-3">
            {data?.attributes?.subDescription}
          </h5>
          <div className="raitngs flex items-center gap-x-5 my-3">
            <img src="../../images/star.png" className="w-[100px] " />
            <span className="text-[#B6B6B6]">(250) Ratings</span>
          </div>

          <div className={productStyle.price}>
            <span className={productStyle.newPrice}>${discountPrice}</span>
            <span className={productStyle.oldPrice}>
              ${data?.attributes?.price}
            </span>
            <span className={productStyle.discount}>{discount}% OFF</span>
          </div>
          <hr />

          <div className="details  mt-6 flex flex-col md:items-center gap-4 md:flex-row md:gap-x-10">
            <div className="content flex-[1]">
              <h1 className="text-[20px] font-semibold md:mb-2">
                Delivery Details
              </h1>
              <p>Check estimated delivery date/pickup option.</p>
            </div>
            <div className="coupon bg-[#F1F1F1] flex justify-between py-3 px-6 flex-[2] rounded-md">
              <input
                type="text"
                placeholder="Apply Valid Pincode"
                className="bg-transparent  focus:outline-none"
              />
              <button className="text-[#1B4B66] font-semibold uppercase">
                Check
              </button>
            </div>
          </div>

          <div className="quantity my-10 flex items-center gap-x-4">
            <h1 className="text-[20px] font-semibold ">Quantity:</h1>
            <div className="counter border border-[#1B4B66] rounded-md w-[120px] flex items-center justify-between">
              <button
                className="px-2 text-[24px]"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 text-[24px]"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="discount border   border-[#1B4B66] py-2 px-4 md:w-[60%] flex items-center gap-x-5 rounded-md">
            <div className="content mb-2">
              <h1 className="font-semibold mb-2">
                Get upto 30% Off on order value above $100
              </h1>
              <span className="text-[#1B4B66] text-[14px] font-medium">
                Terms & Conditions
              </span>
            </div>
            <div className="code bg-[#f1f1f1] px-3 text-center py-5 rounded-sm">
              <span className="text-[14px] text-[#626262]">Use Code</span>
              <h1 className="font-semibold">ORDER100</h1>
            </div>
          </div>

          <div className="buttons mt-10 flex flex-col md:items-center gap-5 md:gap-x-5 md:flex-row">
            <button
              className="flex items-center justify-center gap-x-5 px-20 py-2 bg-[#1B4B66] text-[#fff] rounded-md"
              onClick={handleAddToCart
              }
            >
              <AiOutlineShopping size={24} /> Add To Bag
            </button>
            <button
              className="flex items-center justify-center gap-x-5 px-10 py-2 border-2 border-[#1B4B66] text-[#1B4B66] rounded-md"
              onClick={handleToWishlist
              }
            >
              <AiOutlineHeart size={24} /> Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="desc my-16">
        <div className="container">
          <div className="buttons w-full bg-[#f1f1f1] py-2 px-2 md:px-5 rounded-[12px] flex items-center gap-x-10">
            <button
              className={`${
                activeButton === 'description'
                  ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]'
                  : ''
              }`}
              onClick={() => handleSetActiveButton('description')}
            >
              Product Description
            </button>
            <button
              className={` ${
                activeButton === 'relatedProducts'
                  ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]'
                  : ''
              }`}
              onClick={() => handleSetActiveButton('relatedProducts')}
            >
              Related Products
            </button>
            <button
              className={` ${
                activeButton === 'ratings'
                  ? 'bg-[#1B4B66] text-white px-4 py-1 rounded-[6px]'
                  : ''
              }`}
              onClick={() => handleSetActiveButton('ratings')}
            >
              Ratings
            </button>
          </div>
          {activeButton === 'description' && (
            <div className="content my-10 text-[#626262]">
              <p className="mb-2">{data?.attributes?.description}</p>
            </div>
          )}

          {activeButton === 'relatedProducts' && (
            <div className="content my-10 text-[#626262]">
              <Slider {...settings}>
                {filterProducts.map((item) => (
                <div className="div" key={item.id}>
                  <Card item={item} />
                </div>
              ))} 
              </Slider>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
