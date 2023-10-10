import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <>
      <div className="md:flex p-5 justify-between">
        {categories.map((item, index) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Categories;
