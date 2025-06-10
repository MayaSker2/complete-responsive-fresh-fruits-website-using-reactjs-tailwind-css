import fruits from "./../../assets/home/fruits.png";
import leaf from "./../../assets/home/leaf2.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
const Home = () => {
  return (
    <div className='container grid grid-cols-1  md:grid-cols-2 min-h-[650px] relative'>
      {/* Brand Info */}
      <div className='flex flex-col justify-center items-center md:items-start gap-4 
       py-14 md:py-0 space-y-6 relative z-10'>
        
          <div className='text-center md:text-left lg:max-w-[400px] text-7xl font-bold '>
            <motion.h1
            variants={FadeRight(0.6)}
            initial="hidden"
            whileInView="visible"
            className='text-5xl lg:text-6xl font-bold leading-relaxed font-averia'>
              Healthy
              Fresh
              <span className=' text-secondary'>{" "}Fruits!</span>
            </motion.h1>
          </div>
          
          <motion.p
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          className='text-2xl tracking-wide '>
            Order Now For Fresh Healthy Life
          </motion.p>
          <motion.p
          variants={FadeRight(1.2)}
          initial="hidden"
          whileInView="visible"
          className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem magnam et quia mollitia vel impedit
            non pariatur nihil, iusto dolore nobis repellat dolores fugit,
            voluptates reiciendis commodi, a similique id.
          </motion.p>
          <motion.div
          variants={FadeRight(1.5)}
          initial="hidden"
          whileInView="visible">
            <button className='primary-btn flex items-center gap-2'>
              <span><IoBagHandleOutline /></span>
              Order Now 
            </button>
          </motion.div>
      </div>

      {/* Hero Images */}
      <motion.div
      initial ={{opacity : 0 , x: 200, rotate: 75 }}
      whileInView ={{opacity : 1 , x: 0, rotate: 0 }} 
      transition={{ duration: 1, delay: 0.2 }}
      className="flex justify-center items-center">
        <img src={fruits} alt="" className="w-[300px] md:w-[500px] drop-shadow" />
      </motion.div>
      {/* Leaf Image */}
      <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
        <motion.img 
        initial ={{opacity : 0 , y: -200, rotate: 75 }}
        animate ={{opacity : 1 , y: 0, rotate: 0 }} 
        transition={{ duration: 1, delay: 1.5 }}
        src={leaf} alt="" className="w-full md:max-h-[300px]"/>
      </div>
    </div>
  )
}

export default Home
