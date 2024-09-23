import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import Cover from "../../Components/Cover/Cover"
import '../Layout/Layout.css'

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Cover></Cover>
      <Outlet />
      <Footer></Footer>
    </>
  )
};

export default Layout;