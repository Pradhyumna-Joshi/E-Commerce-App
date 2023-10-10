import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BiSolidPhone, BiLogoVisa } from "react-icons/bi";
import {
  FaXTwitter,
  FaLocationDot,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="md:flex justify-between">
        <div className="flex-1 m-5">
          <h1 className="text-3xl font-bold">A_Z.</h1>
          <p className="text-xl font-normal my-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            ex debitis ut et ipsa cupiditate? Lorem ipsum dolor sit amet.
          </p>
          <div className="flex gap-5">
            <div className="flex items-center justify-center  w-[40px] h-[40px] rounded-[50%] bg-[#3b5999]">
              <AiFillFacebook size={24} color="white" />
            </div>
            <div className="flex items-center justify-center  w-[40px] h-[40px] rounded-[50%] bg-[#e4405f]">
              <AiOutlineInstagram size={24} color="white" />
            </div>
            <div className="flex items-center justify-center  w-[40px] h-[40px] rounded-[50%] bg-[#55acee]">
              <FaXTwitter size={20} color="white" />
            </div>
            <div className="flex items-center justify-center  w-[40px] h-[40px] rounded-[50%] bg-[#e60023]">
              <BsPinterest size={20} color="white" />
            </div>
          </div>
        </div>

        <div className="flex-1 m-5">
          <h1 className="font-bold text-xl">Useful Links</h1>
          <div className="flex py-8">
            <ul className="flex-1 space-y-2 list-none">
              <li>Home</li>
              <li>Accesories</li>
              <li>Fashion</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
            </ul>
            <ul className="flex-1 space-y-2 list-none">
              <li>Cart</li>
              <li>Account</li>
              <li>Wishlist</li>
              <li>Terms</li>
              <li>About</li>
            </ul>
          </div>
        </div>

        <div className=" md:flex-1 m-5">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="space-y-5 py-8">
            <div className="flex gap-2 items-center">
              <FaLocationDot />
              <h1>177A,Blecker Street</h1>
            </div>
            <div className="flex gap-2 items-center">
              <BiSolidPhone />
              <h1>+1234567891</h1>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineMail />
              <h1>contact@atoz.com</h1>
            </div>
            <div className="flex gap-5">
              <BiLogoVisa size={30} />
              <FaCcMastercard size={30} />
              <FaCcPaypal size={30} />
              <FaCcAmazonPay size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
