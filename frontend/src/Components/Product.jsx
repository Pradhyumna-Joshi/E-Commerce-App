import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <>
      <div className="flex-1 m-2 min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfd] relative">
        <div className="h-[200px] w-[200px] rounded-[50%] bg-white absolute"></div>
        <img
          style={{ height: "75%", objectFit: "cover" }}
          src={item.img}
          alt="CoverImage"
          className="z-[2]"
        />
        <div className="opacity-[0] hover:opacity-[1] absolute top-0 left-0 flex justify-center w-full h-full items-center z-[3] gap-5  duration-700  transition-all ease">
          <Link to={`/product/${item._id}`}>
            <div className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-[50%] hover:bg-[#e9f5f5] hover:scale-[1.1] transition-all ease duration-300 hover:cursor-pointer">
              <AiOutlineSearch size={28} />
            </div>
          </Link>

          <div className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-[50%] hover:bg-[#e9f5f5] hover:scale-[1.1] transition-all ease duration-300 hover:cursor-pointer">
            <AiOutlineShoppingCart size={28} />
          </div>
          <div className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-[50%] hover:bg-[#e9f5f5] hover:scale-[1.1] transition-all ease duration-300 hover:cursor-pointer">
            <AiOutlineHeart size={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
