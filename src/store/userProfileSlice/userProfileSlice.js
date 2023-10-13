import moment from 'moment';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  userData: null
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    fetchUserProfileDetails: (state, action) => {
      console.log("login action: ", action);
      state.userData = action.payload;
      // state.userData = {
      //   ...action.payload,
      //   new_created_at: 'moment(action.payload.created_at).format()'
      // };
    }

  },
});

export const {
  fetchUserProfileDetails
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
