import React, {useState, useEffect} from 'react'
import "../Products/styles.css"

export default function Products(){
    const [products, setProducts] = useState([])

    useEffect(() => {

    }, [])

    const url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular';
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
    .then(data=> setProducts(data))
    



    return (
        <>

            <h1>Trending</h1>
            <div className='product-container'>
                <ul className='ul-css'>
                {products.map(item => {
                return (
                    <li className='li-item'>

                            <img src={item.thumbnail}/>
                            <p className='shoeName'>{item.shoeName}</p>
                            <p className='lowestAsk'>Lowest Ask</p>
                            <p className='price'>${item.lowestResellPrice.stockX}</p>
                    </li>
                  
                )
            })}
                </ul>
            </div>
            
           
        </>
        
    )
}