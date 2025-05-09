import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX} sm:px-16 px-6`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:w-full lg:w-1/2 xl:w-1/3`}>
          <div className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-[10px] mb-2'>
            <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
            <p className={`${styles.paragraph} text-white ml-2`}> 
              <span className='text-white'>20%</span>  Discount For {" "}
              <span className='text-white'>1 Month</span>  Account
            </p>
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The Next
              <br className='sm:block hidden' />{" "}
              <span className='text-cyan-300'>Generation</span>{" "}
            </h1>
            <div className='ss:flex  md:ml-4 mr-0 md:flex-1'>
              <GetStarted/>
            </div>
          </div>
          <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Payment Method.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-amber-50`}>
            We help you to pay your bills with the best payment method.
            Our Team Is Best We WIll DO IT For You.
          </p>
        </div>
        <div className='md:block md:absolute md:right-0 md:top-0 md:w-[40%] md:h-[100%]' >
          <img src={robot} alt='robot' className='w-[100%] h-[100%] relative z-5' />
        </div>
        <div className='absolute z-0 w-[40%] h-[40%] top-0 right-10 pink__gradient'></div>
        <div className='absolute z-1 w-[80%] h-[80%] rounded-full white__gradient'></div>
        <div className='absolute z-0 w-[60%] h-[50%] right-10 bottom-20 pink__gradient'></div>
    
      </section>
  )
}

export default Hero