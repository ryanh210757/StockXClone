import React from 'react'


export default function CarouselItem({item}){
    return (
       <div className='carousel-item'>
        <div></div>
        <img className='carousel-img' src={item.image}/>
       </div>
    )
}