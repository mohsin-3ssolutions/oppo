import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";


export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default DefaultLayout;