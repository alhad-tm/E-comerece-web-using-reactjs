import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/lasthero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
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
        <motion.div
          initial={{ bottom: "2.5rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />

        <motion.div
          transition={transition}
          initial={{ right: "-16%" }}
          whileInView={{ right: "-18%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
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
  );
};

export default Hero;
