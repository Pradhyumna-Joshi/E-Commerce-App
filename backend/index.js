const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const stripeRouter = require("./routes/stripe");
const cors = require("cors");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("https://e-commerce-app-mocha-omega.vercel.app/api/auth", authRouter);
app.use("https://e-commerce-app-mocha-omega.vercel.app/api/users", userRouter);
app.use(
  "https://e-commerce-app-mocha-omega.vercel.app/api/products",
  productRouter
);
app.use(
  "https://e-commerce-app-mocha-omega.vercel.app/api/orders",
  orderRouter
);
app.use("https://e-commerce-app-mocha-omega.vercel.app/api/carts", cartRouter);
app.use(
  "https://e-commerce-app-mocha-omega.vercel.app/api/checkout",
  stripeRouter
);

app.listen(5000, () => {
  console.log("Running on port 5000");
});
