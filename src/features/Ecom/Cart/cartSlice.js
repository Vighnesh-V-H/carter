import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],

  image: '',
  name: '',
  quantity: 1,
  totalQuantity: '',
  pricePerItem: '',
  totalprice: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products.push(action.payload);
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.products.find((item) => item.id === action.payload);

      item.quantity++;
      // item.totalPrice = item.quantity * item.unitPrice;
    },
    setPrice(state, action) {
      state.pricePerItem = state.products;
    },
    setTotalPrice(state, action) {
      state.totalprice = state.quantity * state.pricePerItem;
    },
    decreaseItemQuantity(state, action) {
      const item = state.products.find((item) => item.id === action.payload);

      item.quantity--;
    },
    clearCart(state) {
      state.products = [];
    },
  },
});

export const {
  setImage,
  setName,
  setPrice,
  setQuantity,
  setTotalPrice,
  setProducts,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) =>
  state.cart.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

export const getCurrentQuantityById = (id) => (state) => {
  // console.log(id, state.cart.products);
  return state.cart.products.find((item) => item.id === id)?.quantity ?? 0;
};
