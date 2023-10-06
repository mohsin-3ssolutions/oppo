import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    loginRequest: (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    //   state.errorMessage = null;
    },
    loginSuccess: (state, action) => {
    //   console.log("login action: ", action);
    //   state.isLoading = false;
    //   state.user = action.payload;
    //   localStorage.setItem("onBoardinguserStatus", JSON.stringify(state.user));
    //   state.status = 200;
    },
    loginFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.errorMessage = action.payload;
    //   toasterNotification(state.errorMessage, "error");
    },

  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
