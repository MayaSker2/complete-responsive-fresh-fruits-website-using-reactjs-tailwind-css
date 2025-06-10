import React from 'react'
import fruit1 from "../../assets/banner/fruit1.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'
const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Banner Image */}
               <div className='flex justify-center items-center'>
                    <motion.img
                    variants={{ opacity:0 , scale:0.5 }}
                    animate={{ opacity:1 , scale:1 }}
                    whileInView={{ type:"spring" , stiffness: 100, delay: 0.2 }}
                    viewport={{ once:true }}
                    src={fruit1} alt="img" className='w-[250px] md:max-w-[350px] h-full object-cover ' />
               </div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center '>
                <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4 lg:max-w-[400px] '>
                    <motion.h1 
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}
                    className='text-3xl lg:text-6xl font-bold font-averia uppercase'>
                        {" "}
                        Brand Info
                    </motion.h1>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa soluta cum impedit,\
                        aliquam, iusto voluptates quia architecto at ullam quibusdam
                        ducimus veniam voluptatum doloremque illo facere explicabo. Aliquid, neque!
                    </motion.p>
                    <motion.p
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa soluta cum impedit,\
                        aliquam, iusto voluptates quia architecto at ullam quibusdam
                        ducimus veniam voluptatum doloremque illo facere explicabo. Aliquid, neque!
                    </motion.p>
                    <motion.div
                    variants={FadeUp(1.1)}
                    initial="hidden"
                    whileInView="visible">
                        <button className='primary-btn flex items-center gap-2'>
                        <span><IoBagHandleOutline /></span>
                        Learn More </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
