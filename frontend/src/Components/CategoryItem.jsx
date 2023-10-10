import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 m-[3px]  h-[30vh] md:h-[70vh] relative">
      <Link to={`/products/${item.cat}`}>
        <img
          src={item.img}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="CoverImage"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ">
          <h1 className="text-4xl text-white font-bold mb-3">{item.title}</h1>
          <button className="p-4 text-gray-600 font-regular bg-white cursor-pointer">
            SHOW NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
