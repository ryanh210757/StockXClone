import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel/Carousel";


export default function Home(){

   /* const url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3b08bf2947msh8c78adaa352d7bfp13bde9jsn9f87998206e6',
            'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
        }
    };
    fetch('https://sneaker-database-stockx.p.rapidapi.com/mostpopular', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3b08bf2947msh8c78adaa352d7bfp13bde9jsn9f87998206e6',
            'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
        }
    }).then(res=>res.json())
    .then(res=> console.log(res))
    */
    return (
        <>
        <Navbar />
        <h1>HOME PAGE</h1>        
        <Carousel />
        </>

    )
}