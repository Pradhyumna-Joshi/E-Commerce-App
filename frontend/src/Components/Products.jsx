import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { popularProducts } from "../data";
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <>
      <h1 className="text-8xl absolute opacity-10 z-[4]">Top Picks</h1>
      <div className="p-5 flex flex-wrap">
        {cat
          ? filteredProducts.map((item, index) => (
              <Product key={item.id} item={item} />
            ))
          : products
              .slice(0, 8)
              .map((item, index) => <Product key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default Products;
