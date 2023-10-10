import React from "react";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./screens/Home";

import ProductList from "./screens/ProductList";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Success from "./screens/Success";
import Layout from "./screens/Layout";

// var user = null;
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="products/:category" element={<ProductList />} />
//         <Route path="product/:id" element={<Product />} />
//         <Route path="cart" element={<Cart />} />
//       </Route>
//       <Route
//         path="/login"
//         element={user ? <Navigate replace to="/" /> : <Login />}
//       />
//       <Route
//         path="/register"
//         element={user ? <Navigate replace to="/" /> : <Register />}
//       />
//       <Route path="/success" element={<Success />} />
//     </>
//   )
// );

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const registeredUser = useSelector((state) => state.user.registeredUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={
            registeredUser ? <Navigate replace to="/login" /> : <Register />
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
