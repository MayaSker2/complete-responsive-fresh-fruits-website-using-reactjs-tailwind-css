import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { MdMenu, MdOutlineLocalGroceryStore } from "react-icons/md";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { motion } from 'framer-motion';
const NavMenu = [
    {
        id:1,
        title:"Home",
        link:"#"
    },
    {
        id:2,
        title:"Products",
        link:"#,"
    },
    {
        id:3,
        title:"About",
        link:"#,"
    },
    {
        id:4,
        title:"Shop",
        link:"#,"
    },
    {
        id:5,
        title:"Contacts",
        link:"#,"
    },
]
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <motion.div
                initial={{ opacity:0 }} 
                animate={{ opacity:1 }}
                onDragTransitionEnd={{ duration:0.5 , delay:0.5 }}
                className='container flex justify-between items-center py-4 md:pt-4'>
                        {/* Logo section */}
                        <div className='text-2xl flex items-center gap-2 font-averia font-bold  leading-none tracking-normal uppercase'>
                            <p className=' text-primary'>FRUIT</p>
                            <p className='text-secondary'>STORE</p>
                            <FaLeaf className=' text-green-500' />
                        </div>

                        {/* Menu section */}
                        <div className="hidden md:block">
                            <ul className='flex items-center gap-6 text-xl text-gray-600  '>
                                {
                                    NavMenu.map(
                                        (menu)=>(
                                            <li key={menu.id}>
                                                <a href={menu.link}
                                                className="inline-block py-1 px-2 hover:text-primary 
                                                hover:shadow-[0_3px_0_-1px_#ef4444]"
                                                >{menu.title}</a>
                                            </li>         
                                        )
                                    )
                                }
                                <button className="text-2xl hover:bg-primary hover:text-white 
                                rounded-full p-2 duration-200 ">
                                    <MdOutlineLocalGroceryStore />
                                </button>
                            </ul>
                        </div>
                        
                        {/* Mobile Hamburger Menu section */}
                        <div className="md:hidden" onClick={()=> 
                        setOpen(!open)}>
                            <MdMenu className="text-4xl"/>
                        </div>
                </motion.div>
        </nav>

        {/* // Mobile Menu section */}
        <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar
