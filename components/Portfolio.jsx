import React from 'react'
import travel1 from '../public/travel1.jpg'
import travel3 from '../public/travel3.jpg'
import travel4 from '../public/travel4.jpg'
import travel5 from '../public/travel5.jpg'
import travel6 from '../public/travel6.jpg'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 text-center'>
        <h1 className='text-3xl p-4'>Travel Photography</h1>
        <div className='grid grid-rows-none md:grid-cols-3 p-4 md:gap-4'>
            <div className='w-full h-full col-span-4 md:row-span-1' >
                <Image src={travel1} alt='/' />
            </div>
            <div className='w-full h-full col-span-4 md:row-span-1'>
                <Image src={travel3} alt='/'/>
            </div>
                <Image src={travel4} alt='/'/>
                <Image src={travel5} alt='/'/>
                <Image src={travel6} alt='/'/>
            
        </div>
    </div>
  )
}

export default Portfolio