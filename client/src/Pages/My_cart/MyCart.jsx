import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../../makeRequest';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';

const MyCart = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    const taxPercentage = Math.random() * 0.1 + 0.1;
    const taxAmount = total * taxPercentage.toFixed(2);
    products.forEach((item) => (total += item.quantity * item.price));
    const totalPrice = total + taxAmount;
    return totalPrice.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51NHZAhGNm5QqJugrwq5NU368aPqix9u0yGGE619AV6djUxyP61EoRdRiUaYPDt9Y2sE2eAsGTtDATojIubXHvcJg004TODzUM9'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

      console.log(products);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="px-2 md:px-8 pb-10">
      <div className="heading mt-16 mb-10">
        <div className="cramps flex items-center gap-x-2 text-[14px] font-meduim ">
          <Link to={'/'}>
            <h1 className="opacity-[.4]">Home</h1>
          </Link>

          <IoIosArrowForward />
          <h1 className="opacity-[1] text-[#1B4B66]">My Cart</h1>
        </div>

        <div className="title text-[32px] font-bold text-[#1B4B66] mt-5 ">
          <h1>My Cart</h1>
        </div>
      </div>
      <div className="content flex flex-col  items-start gap-16 md:flex-row">
        <div className="left w-full flex-[1]">
          <table className=" text-left ">
            <thead className="border-b">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <hr />
              </tr>
            </thead>

            {products.length === 0 ? (
              <span className="text-center flex justify-center items-center mt-10 mb-10 text-[18px] opacity-[.3] font-semibold">
                Your Cartlist is empty
              </span>
            ) : (
              products.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td>
                      <div className="my-10 flex justify-between w-[70%]">
                        <div className="left flex gap-x-5">
                          <img
                            className="w-[100px] object-contain"
                            src={'http://localhost:1338' + item.image}
                          />
                          <div className="">
                            <h1 className="font-semibold text-[#1B4B66] mb-2">
                              {item.name}
                            </h1>
                            <span className="text-[#626262]">
                              {item.subDescription}
                            </span>
                            <div className="counter mt-2  w-[100px] justify-between rounded-md flex items-center">
                              <span className="text-[#1B4B66]">
                                {' '}
                                Qty - {item.quantity}
                              </span>
                            </div>
                            <div className="buttons mt-5 flex gap-6 font-semibold text-[14px]">
                              <button
                                className="text-red-500 underline"
                                onClick={() => dispatch(removeItem(item.id))}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center"> ${item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      ${item.quantity * item.price}{' '}
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
          <div className="accordion mt-10">
            <h1 className="mb-3 text-[#1B4B66] font-semibold">
              Apply Coupon Code
            </h1>
            <hr className="w-[83%]" />
            <div className="coupon mt-5 bg-[#F1F1F1] md:w-[50%] flex justify-between py-3 px-4 flex-[2] rounded-md">
              <input
                type="text"
                placeholder="Apply Valid Pincode"
                className="bg-transparent  focus:outline-none w-[80%]"
              />
              <button className="text-[#1B4B66] font-semibold uppercase">
                Check
              </button>
            </div>
          </div>
        </div>
        <div className="right w-full flex-[1] md:sticky md:top-5 md:h-full">
          <h1 className="mb-1 text-[24px] font-semibold text-[#1B4B66]">
            Order Summary
          </h1>
          <hr />
          <div className="total mt-5">
            <div className="subtotal flex justify-between items-center">
              <h1>Subtotal:</h1>
              <span>${totalPrice()}</span>
            </div>
            <div className="text  flex justify-between items-center my-6">
              <h1 className="font-semibold text-[#1B4B66]">Tax:</h1>
              <span>$0</span>
            </div>
            <div className="total flex justify-between items-center mb-6 ">
              <h1 className="font-semibold text-[#1B4B66]">total:</h1>
              <span>${totalPrice()}</span>
            </div>
          </div>
          <div className="button flex flex-col justify-between text-white gap-5 md:gap-x-5 md:flex-row">
            {/* <Link className="md:w-[40%]" to={`/checkout/information`}> */}
            <button
              className="bg-[#1B4B66] w-[100%] rounded-md py-2"
              onClick={handlePayment}
            >
              Place Order
            </button>
            {/* </Link> */}

            <Link className="md:w-[40%]" to={'/categories/1'}>
              <button className="border-2 border-[#1B4B66] text-[#1B4B66] w-[100%] py-2 rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
