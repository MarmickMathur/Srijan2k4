import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Section } from "./interface";

export const Gallery = () => {
  return (
    <>
      <div className="h-auto w-screen">
        <div className="max-w-screen p-5 grid md:p-10 grid-cols-1 gap-5 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img
              className=""
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967638/fotofreaks_iitism_1675510867_3030727283232442698_5457821429_ntn445.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967635/fotofreaks_iitism_1675751380_3032744844446654362_5457821429_wdblrk.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img className="outline-none border-none " src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967634/fotofreaks_iitism_1675510867_3030727283232278412_5457821429_bncuph.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
            <img
              src=" https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967632/fotofreaks_iitism_1675510867_3030727283215629849_5457821429_rdiys1.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967477/fotofreaks_iitism_1675751379_3032744844127884839_5457821429_clavzn.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967631/fotofreaks_iitism_1675597389_3031453081258077365_5457821429_fclfrl.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
            <img src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
            <img src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967623/fotofreaks_iitism_1675510867_3030727283148499964_5457821429_e2sk8e.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
            <img src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967563/fotofreaks_iitism_1675751379_3032744844136108526_5457821429_ejmxch.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967522/fotofreaks_iitism_1675676767_3032118946815236599_5457821429_g7qhtw.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967533/fotofreaks_iitism_1675597389_3031453081182662787_5457821429_zbs9ev.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140034780_5457821429_gxrzzk.jpg"
              alt=""
            />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
            <img className="outline-none" src="" alt="" />
          </div>
          <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140053768_5457821429_f8ul1t.jpg"
              alt=""
            />
          </div>
        </div>
        <motion.div
        //   style={{ y }}
          className="text-8xl font-bold bg-transparent bg-clip-text opacity-70 flex justify-center items-center my-10"
        >
          Coming Soon!
        </motion.div>
      </div>
    </>
  );
};
