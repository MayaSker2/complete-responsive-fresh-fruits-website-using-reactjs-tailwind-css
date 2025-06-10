import React from 'react'
import background from "../../assets/banner3/background.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}
const Banner3 = () => {
  return (
    <section  style={bgStyle} className='bg-secondary/20 rounded-3xl'>
        <div 
       
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
            {/* blank div */}
                <div> </div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center md:items-start  text-center md:text-left space-y-4 lg:max-w-[400px] '>
                    <motion.h1 
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}
                    className='text-3xl lg:text-6xl font-bold font-averia uppercase'>
                        {" "}
                        Get Fresh fruit today
                    </motion.h1>
                    <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa soluta cum impedit,\
                        aliquam, iusto voluptates quia architecto at ullam quibusdam
                        ducimus veniam voluptatum doloremque illo facere explicabo. Aliquid, neque!
                    </motion.p>
                    
                    <motion.div
                    variants={FadeLeft(1.1)}
                    initial="hidden"
                    whileInView="visible">
                        <button className='primary-btn flex items-center gap-2'>
                        <span><IoBagHandleOutline /></span>
                        Order Now </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner3
