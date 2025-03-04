import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
