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
    }

  },
});

export const {
  fetchUserProfileDetails
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
