import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './features/Profile/profileSlice';
import chatSlice from './features/Chat/chatSlice';
import cartSlice from './features/Ecom/Cart/cartSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    chatName: chatSlice,
    cart: cartSlice,
  },
});

export default store;
