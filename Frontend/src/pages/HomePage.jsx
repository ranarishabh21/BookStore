import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import FreeBooks from "../components/FreeBooks"

function homePage() {
  return (
    <>
    <Navbar/>  
    <Banner/>
    <FreeBooks/>

    <Footer/> 
    </>
  );
}

export default homePage;
