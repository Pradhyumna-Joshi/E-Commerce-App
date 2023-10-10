import { ClassSharp } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }

      state.total += action.payload.price * action.payload.quantity;
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1;
      }
      state.total += state.products[productIndex].price;
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      state.products[productIndex].quantity -= 1;
      state.total -= state.products[productIndex].price;
      if (state.products[productIndex].quantity < 1) {
        state.products.splice(productIndex, 1);
        state.quantity -= 1;
      }
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
