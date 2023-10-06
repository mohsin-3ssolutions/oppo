import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userProfileSlice from "./userProfileSlice/userProfileSlice";

const store = configureStore({
    reducer: {
        userProfileSlice: userProfileSlice,
    },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
