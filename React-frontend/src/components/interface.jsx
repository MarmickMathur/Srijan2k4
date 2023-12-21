import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Gallery } from "./Gallery";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import Hero from "./Hero";

export const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`h-auto w-screen bg-white p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.1,
        },
      }}
    >
      {" "}
      {children}{" "}
    </motion.section>
  );
};

export const Interface = (props) => {
  const {onSectionChange} = props;
  return (
    <>
    {/*<div className="flex flex-col items-center w-screen px-11"> */}
      <Hero onSectionChange={onSectionChange} />
      <Gallery />
      <Sponsor />
      <Footer />
    {/*</div> */}
    </>
  );
};
