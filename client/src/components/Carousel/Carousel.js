import React, {useState} from 'react'
import CarouselItem from './CarouselItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleLeft, faCircleRight, faCircleDot} from '@fortawesome/free-solid-svg-icons'
import "../Carousel/styles.css"


export default function Carousel(){
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            image: require("../Carousel/Images/Gucci-Merch-Phase2-ENPrimary_Desktop_copy_22.webp")
        },
        {
            image: require("../Carousel/Images/Jordan-11-release_Primary_Desktop_EN.webp")
        },
        {
            image: require("../Carousel/Images/Kobe6_ReverseGrinch_Template_Primary_Desktop.webp")
        }
    ]


    return (
        <>
        <div className='carousel'>
            <div className='inner'
                    style={{transform: `translate:(-${activeIndex * 100})`}}>
                {items.map(item => <CarouselItem item={item}/>)}
            </div>
            <div className='carousel-buttons'>
                <button className='button-arrow'>
                    <FontAwesomeIcon icon={faCircleLeft} />
                </button>
                <div className='indicators'>
                    {items.map((item, index) => {
                        return (
                            <button className='indicator-buttons'>
                                <FontAwesomeIcon icon={faCircleDot} />
                            </button>
                        )
                    })}
                </div>
                <button className='button-arrow'>
                    <FontAwesomeIcon icon={faCircleRight} />
                </button>
            </div>
            
        </div>
        </>
    )
}