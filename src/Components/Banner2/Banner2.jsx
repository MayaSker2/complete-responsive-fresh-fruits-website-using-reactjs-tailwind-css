import React from 'react'
import fruit2 from "../../assets/banner2/fruit3.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'
const Banner2 = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4 lg:max-w-[400px] '>
                    <motion.h1 
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}
                    className='text-3xl lg:text-6xl font-bold uppercase font-averia'>
                        {" "}
                        online fruit store
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
                        download the app </button>
                    </motion.div>
                </div>
            </div>
            {/* Banner Image */}
            <div className='flex justify-center items-center'>
                <motion.img
                    initial ={{opacity : 0 , x: 200, rotate: 75 }}
                    whileInView ={{opacity : 1 , x: 0, rotate: 0 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once:true }}
                src={fruit2} alt="img" className='w-[500px]  h-full object-cover drop-shadow-sm' />
            </div>
        </div>
    </section>
  )
}

export default Banner2
