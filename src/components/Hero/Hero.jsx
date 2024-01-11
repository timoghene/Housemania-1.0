import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'   ;
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
  return (
   <section className='hero-wrapper'>
    <div className='paddings innerWidth flexCenter hero-container '>
{/* left side */}
        <div className=' flexColStart hero-left'>
            <div className='hero-title'>
            <div className='blue-circle'></div>
                <motion.h1
                initial={{y:'2rem', opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{
                    duration:3,
                    type: "spring"
                }}
                >Discover <br/> 
                museum-esque <br/>
                Properties</motion.h1>
            </div>
            <div className='flexColStart hero-des'>
                <span className='secondaryText'>Find an array of the best properties that appeal to you very easily</span>
                <span className='secondaryText'>zero issues in finding your residence of choice</span>
            </div>
            <div className='flexCenter search-bar'>
                <HiLocationMarker color="blue" size={25}/>
                <input type="text"/>
                <button className='button'>search</button>
            </div>

            <div className='flexCenter stats'>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp end={700} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Premuim Products</span>
                </div>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp end={500} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
                </div>
           
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp  end={1000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Star reviews</span>
                </div>
        </div>
        </div>
{/*right side */}
        <div className=' flexCenter hero-right'>
            <motion.div
              initial={{x:'7rem', opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration:3,
                    type: "spring"
                }}
             className='image-container'>
                <img src="./pexels-expect-best-323780.jpg" alt=""/>
            </motion.div>
        </div>
    </div>
   </section>
  )
}

export default Hero