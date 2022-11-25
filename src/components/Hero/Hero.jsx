import React from 'react'
import css from "./Hero.module.css"
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={css.container}>

    {/* left side */}

        <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>

         <div className={css.text2}>
            <span>Trendy collections</span>
            <span>Have a wide variety of shopping experience</span>
         </div>

        </div>

        {/* middle side */}

        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600}  />
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best signup offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>4M</span>
                <span>Monthly traffic</span>
            </div>
            <div className={css.customers}>
                <span>100K</span>
                <span>Happy Customers</span>
            </div>
        </div>

    </div>
  )
}

export default Hero