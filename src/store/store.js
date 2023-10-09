import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userProfileSlice from "./userProfileSlice/userProfileSlice";
import thunk from "redux-thunk"; // Import Redux Thunk

const store = configureStore({
    reducer: {
        userProfileSlice: userProfileSlice,
    },
    middleware: [...getDefaultMiddleware(), thunk],
});


export default store;
