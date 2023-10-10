import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { decrementQuantity, incrementQuantity } from "../redux/cartRedux";

const KEY =
  "pk_test_51NuYVFSEC4DCqiTfuqhp2sUgwrTgOZqpSm1LBkVixyhPvwxYxAsEguvq9hxINkzU7pzMkVhzwTIZsvQ7FERAEJFk00QxzYf5Qu";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleQuantity = (s, id) => {
    // console.log(s, item);
    if (s === "inc") {
      dispatch(incrementQuantity({ id }));
    } else {
      dispatch(decrementQuantity({ id }));
    }
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.total > 0 && makeRequest();
  }, [stripeToken, cart.total]);
  return (
    <>
      {/* <NavBar />
      <Announcement /> */}
      <div className="w-100% py-5 px-2 md:p-5">
        <h1 className="text-4xl text-center">YOUR BAG</h1>
        <div className=" text-center md:flex items-center justify-between p-4">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="p-2 md:p-3 border-2 font-semibold border-black"
          >
            CONTINUE SHOPPING
          </button>
          <div className="hidden md:flex gap-10 underline">
            <h1>Shopping Bag({cart.quantity})</h1>
          </div>
        </div>
        <div className="md:flex  justify-between bg-white mt-8">
          <div className="flex-[3] py-4">
            {cart.products.map((item, index) => (
              <>
                <div className="md:flex">
                  <div className="flex flex-col items-center md:flex-row flex-[2] ">
                    <div className="max-w-[30%] max-h-[100%] bg-blue-400">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>

                    <div className="py-5 px-8 text-xl flex flex-col space-y-5">
                      <span>
                        <b>Product : </b> {item.title}
                      </span>
                      <span>
                        <b>ID : </b> {item._id}
                      </span>
                      <div className="flex gap-5">
                        <b>Color : </b>
                        <div
                          style={{ backgroundColor: item.color }}
                          className={`w-[30px] h-[30px]  rounded-[50%]`}
                        ></div>
                      </div>

                      <span>
                        <b>Size : </b> {item.size}
                      </span>
                    </div>
                  </div>
                  <div className="my-5 md:my-0 flex flex-col items-center justify-center flex-[1]">
                    <div className="flex gap-5 text-3xl mb-5">
                      <button
                        onClick={() => {
                          handleQuantity("dec", item._id);
                        }}
                      >
                        -
                      </button>
                      <h1>{item.quantity}</h1>
                      <button
                        onClick={() => {
                          handleQuantity("inc", item._id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <h1 className="font-semibold text-4xl">
                      {item.price * item.quantity}
                    </h1>
                  </div>
                </div>
                <hr className="my-10" />
              </>
            ))}
          </div>
          <div className="flex-[1] border rounded-md shadow-md h-fit">
            <div className="p-4 border-2 border-dotted border-gray-400">
              <h1 className="text-3xl mb-5">ORDER SUMMARY</h1>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>₹{cart.total}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Estimated Shipping</p>
                  <p>₹10</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shopping Discount</p>
                  <p>₹10</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex items-center justify-between text-2xl font-semibold">
                <p>Total</p>
                <p>₹{cart.total + 10 + 10}</p>
              </div>

              <StripeCheckout
                name="A-Z Shop"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                currency="inr"
                token={onToken}
                stripeKey={KEY}
              >
                <button className="p-3 bg-gray-200 my-5">Checkout Now</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Cart;
