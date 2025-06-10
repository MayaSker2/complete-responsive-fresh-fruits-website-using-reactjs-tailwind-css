import React from 'react'
import apple from "../../assets/menus/red-apple.png"
import orange from "../../assets/menus/orange.png"
import avocado from "../../assets/menus/avocado.png"
import cherries from "../../assets/menus/cherries.png"
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const MenuData= [
    {
        id: 1,
        img:apple,
        title:"Fresh Red Apple",
        link:"/",
        price:"$3.99",
        delay:0.3,
    },
    {
        id: 2,
        img:orange,
        title:"Fresh Orangs",
        link:"/",
        price:"$2.99",
        delay:0.6,
    },
    {
        id: 3,
        img:avocado,
        title:"Fresh Avocado",
        link:"/",
        price:"$5.99",
        delay:0.9,
    },
    {
        id: 4,
        img:cherries,
        title:"Fresh Cherries",
        link:"/",
        price:"$4.00",
        delay:1.2
    },
]
const Menus = () => {
  return (
    <div className='container pt-12 pb-20'>
        <motion.h1 
        initial={{opacity: 0 , x:-200}}
        animate={{opacity: 1 , x:0}}
        transition={{duration:1 , delay:0.3}}
        className=' text-2xl font-bold text-left pb-10 uppercase font-averia'>
            Our Menu
        </motion.h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8' >
        {
            MenuData.map(
                (menu)=>(
                    <motion.div
                    variants={FadeLeft(menu.delay)}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.1 }}
                    key={menu.id} 
                    className='bg-secondary/10 rounded-3xl px-4 py-2 shadow-3xl flex flex-row
                                 justify-around shadow-lg items-center gap-3'>      
                        <div>
                            <img src={menu.img} alt="fruit" className='w-24 mb-4 scale-125 transform-translate-y-6' />
                        </div>
                        <div>
                            <p className='font-semibold text-lg '>{menu.title}</p>
                            <p className='text-secondary font-semibold text-lg'>{menu.price}</p>
                        </div>
                    </motion.div>
                )
            )
        }
      </div>
    </div>
  )
}

export default Menus
