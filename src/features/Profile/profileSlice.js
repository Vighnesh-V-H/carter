import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  profilePic: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfile(state, action) {
      state.userName = action.payload;
    },
    setProfilePic(state, action) {
      state.profilePic = action.payload;
    },
  },
});

export const { createProfile, setProfilePic } = profileSlice.actions;

export default profileSlice.reducer;
