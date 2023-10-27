import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { reset } from "../redux/userRedux";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <div className="h-[40px] mb-7 md:mb-3 md:h-[60px] ">
        <div className="px-5 py-5 flex justify-between items-center">
          <div className="hidden md:flex flex-1  items-center">
            <h1>EN</h1>
            <div className="flex border ml-5 py-1 px-2 text-gray-400 items-center">
              <input type="search" className="py-1 px-1" />
              <FiSearch />
            </div>
          </div>
          <div className="md:flex-1 text-4xl font-bold text-center">A-Z.</div>
          <div className="flex-1 flex justify-end items-center gap-8">
            {user ? (
              <>
                <h1 className="text-lg">Hello, {user.username}</h1>
                <div
                  onClick={() => {
                    dispatch(reset());
                    navigate("/login");
                  }}
                  className="border-2 border-gray-400 hover:bg-gray-400 duration-500 cursor-pointer hover:text-white px-3 py-1 rounded"
                >
                  LOGOUT
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="cursor-pointer"
                >
                  LOGIN
                </div>
                <div
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="border-2 border-slate-400 bg-slate-400 hover:bg-white hover:text-black duration-500 cursor-pointer text-white px-3 py-1 rounded"
                >
                  SIGN UP
                </div>
              </>
            )}

            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
