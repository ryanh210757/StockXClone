import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel/Carousel";
import Products from "./Products/Products"



export default function Home(){

    return (
        <>
        <Navbar />
        <h1>HOME PAGE</h1>        
        <Carousel />
        <Products />
        </>

    )
}