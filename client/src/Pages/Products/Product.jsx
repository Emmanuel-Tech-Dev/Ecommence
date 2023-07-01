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


const Product = () => {
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
  const { newData } = useFetch(`/products?_limit=4&populate=*`);

  const filterProducts = newData
    .slice()
    .reverse()
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
    );

  const dispatch = useDispatch();
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
            className="w-[100%] h-[600px] rounded-[16px]"
            src={
              'http://localhost:1338' +
              data?.attributes?.[selectedImg]?.data[0]?.attributes?.url
            }
          />
          <div className={productStyle.thumnails}>
            <img
              className="w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[80px] rounded-md"
              src={
                'http://localhost:1338' +
                data?.attributes?.image?.data[0]?.attributes?.url
              }
              onClick={() => setSelectedImg('image')}
            />
            <img
              className="w-[80px] rounded-md"
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
            <img src="../../images/star.png" />
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

          <div className="details mt-6 flex items-center gap-x-10">
            <div className="content flex-[1]">
              <h1 className="text-[20px] font-semibold mb-2">
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

          <div className="discount border   border-[#1B4B66] py-2 px-4 w-[60%] flex items-center gap-x-5 rounded-md">
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

          <div className="buttons mt-10 flex items-center gap-x-5 ">
            <button
              className="flex items-center gap-x-5 px-20 py-2 bg-[#1B4B66] text-[#fff] rounded-md"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    name: data.attributes.name,
                    subDescription: data.attributes.subDescription,
                    price: discountPrice,
                    image: data.attributes.image.data[0].attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AiOutlineShopping /> Add To Bag
            </button>
            <button
              className="flex items-center gap-x-5 px-10 py-2 border-2 border-[#1B4B66] text-[#1B4B66] rounded-md"
              onClick={() =>
                dispatch(
                  addToWishlist({
                    id: data.id,
                    name: data.attributes.name,
                    subDescription: data.attributes.subDescription,
                    image: data.attributes.image.data[0].attributes.url,
                    price: discountPrice,
                  })
                )
              }
            >
              <AiOutlineHeart /> Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="desc my-16">
        <div className="container">
          <div className="buttons w-full bg-[#f1f1f1] py-2 px-5 rounded-[12px] flex items-center gap-x-10">
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
            <div className="content my-10 text-[#626262] flex flex-wrap justify-between gap-x-20">
              {filterProducts.map((item) => (
                <div className="div" key={item.id}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
