import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  image: '',
  messages: [],
};

const chatSlice = createSlice({
  name: 'chatName',
  initialState,
  reducers: {
    openChat(state, action) {
      state.name = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    pushMessages(state, action) {
      state.messages.push(action.payload);
    },
    clearMessages(state, action) {
      state.messages = [];
    },
  },
});

export const { openChat, setImage, pushMessages, clearMessages } =
  chatSlice.actions;

export default chatSlice.reducer;
