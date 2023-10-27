import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Product = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  const handleQuantity = (s) => {
    if (s === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://e-commerce-app-mocha-omega.vercel.app/api/products/find/${id}`
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
    console.log(product);
  }, []);

  const handleSubmit = () => {
    if (user) dispatch(addProduct({ ...product, color, size, quantity }));
    else {
      navigate("/login");
    }
  };
  return (
    <>
      {/* <NavBar />
      <Announcement /> */}
      <div className="md:flex p-[10px] md:p-[50px]">
        <div className="flex-1 max-h-[500px] flex justify-center">
          <img
            className="w-[70%]  h-[100%]  object-contain"
            src={product.img}
            alt=""
          />
        </div>
        <div className="flex-1 p-[10px] md:px-[50px]">
          <h1 className="text-4xl">{product.title}</h1>
          <p className="my-5 text-gray-700">{product.desc}</p>
          <h1 className="text-5xl font-medium my-2">₹{product.price}</h1>
          <div className="w-[100%] md:w-3/4 py-5 flex items-center justify-between my-5">
            <div className="flex items-center">
              <h1 className="text-2xl">Color : </h1>
              <div className="flex gap-2 ml-2 ">
                {product.color?.map((item, index) => (
                  <div
                    onClick={() => setColor(item)}
                    key={index}
                    className={`w-[24px] h-[24px] rounded-[50%]  hover:scale-[1.2] duration-300 hover:shadow-md hover:shadow-gray-400 hover:cursor-pointer`}
                    style={{ backgroundColor: item }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-2xl">Size : </label>
              <select
                required
                onChange={(e) => setSize(e.target.value)}
                className="px-3 py-2 rounded border border-slate-300"
                name=""
                id=""
              >
                {product.size?.map((item, index) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-[100%] md:w-1/2 my-5 flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantity("dec")}
                className="text-3xl font-semibold"
              >
                -
              </button>
              <h1 className="text-2xl font-medium border border-teal-500 px-4 py-1 rounded-md">
                {quantity}
              </h1>
              <button
                onClick={() => handleQuantity("inc")}
                className="text-3xl font-medium"
              >
                +
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className="p-3 border border-slate-500 hover:bg-gray-300 rounded duration-500"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Product;
