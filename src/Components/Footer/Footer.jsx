import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa6";
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <footer className='bg-secondary/25 py-5 md:12 mt-16'>
        <motion.div
        initial={{ opaciy:0 }}
        whileInView={{ opaciy:1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center">
        {/* Logo section */}
        <div className='md:text-2xl text-lg flex items-center md:gap-2 gap-1 font-averia font-bold  leading-none tracking-normal uppercase'>
            <p className=' text-primary'>FRUIT</p>
            <p className='text-secondary'>STORE</p>
            <FaLeaf className=' text-green-500' />
        </div>
        {/* Social items section */}
        <div className='md:text-3xl text-xl flex items-center md:gap-4 gap-1 text-gray-700 '>
            <FaFacebook className='hover:scale-105'/>
            <FaInstagram className='hover:scale-105'/>
            <FaTwitter className='hover:scale-105'/>
            <FaTwitter className='hover:scale-105'/>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
