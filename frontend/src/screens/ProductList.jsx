import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  console.log(filters);

  return (
    <>
      {/* <NavBar />
      <Announcement /> */}
      <>
        <div className="p-5">
          <h1 className="text-4xl font-bold">{cat.toUpperCase()}</h1>
          <div className="pt-8 pb-3 gap-5 flex items-center  md:gap-0 ">
            <div className="flex-1 flex flex-col md:flex md:flex-row md:items-center">
              <label className="text-2xl font-bold">Filter Products :</label>
              <select
                name="color"
                onChange={handleFilters}
                className="my-1 md:my-0 p-3 border border-slate-500 rounded md:ml-3"
              >
                <option value="" disabled>
                  Select Color
                </option>
                <option>Yellow</option>
                <option>Red</option>
                <option>Black</option>
                <option>Blue</option>
              </select>

              <select
                name="size"
                onChange={handleFilters}
                className="my-1 md:my-0 p-3 border border-slate-500 rounded md:ml-3"
              >
                <option value="" disabled>
                  Select Size
                </option>
                {cat === "jeans" ? (
                  <>
                    <option>30</option>
                    <option>32</option>
                    <option>34</option>
                    <option>36</option>
                    <option>38</option>
                    <option>40</option>
                  </>
                ) : (
                  <>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </>
                )}
              </select>
            </div>
            <div className="flex-1 text-end">
              <label className="text-2xl font-bold">Sort Products :</label>
              <select
                onChange={(e) => setSort(e.target.value)}
                className="p-3 border  border-slate-500 rounded ml-3"
              >
                <option value="newest">Newest</option>
                <option value="asc">Price (ASC)</option>
                <option value="dsc">Price (DSC)</option>
              </select>
            </div>
          </div>
        </div>
      </>
      <Products cat={cat} filters={filters} sort={sort} />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
};

export default ProductList;
