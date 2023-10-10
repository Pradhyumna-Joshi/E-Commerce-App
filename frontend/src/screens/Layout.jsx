import React from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

var user = null;
const Layout = () => {
  return (
    <>
      <NavBar />
      <Announcement />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
