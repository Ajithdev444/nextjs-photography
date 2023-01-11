import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import Image from 'next/image'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 :current + 1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }
  return (
    <div id='gallery'>
        <h1 className='text-bold text-4xl flex items-center justify-center py-8'>Gallery</h1>
        <div className='relative flex justify-center p-4'>
            {
                SliderData.map((slide, index) => {
                    return(
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' 
                    : 'opacity-0'}>
                        
                        <FaArrowCircleLeft
                        onClick={prevSlide}
                         className='absolute top-[50%] left-[30px] text-white cursor-pointer
                        select-none z-[2]' size={50}/>
                            { index === current && 
                                (
                                    <Image
                                    src={slide.image} 
                                    alt='/' 
                                    width='1440' 
                                    height='600'
                                    object-fit='cover'/>
                                )
                            }
                            <FaArrowCircleRight
                            onClick={nextSlide}
                             className='absolute top-[50%] right-[30px] text-white cursor-pointer
                        select-none z-[2]' size={50}/>
                        
                        </div>
                    )
                })
            }
            </div>
    </div>
  )
}

export default Slider