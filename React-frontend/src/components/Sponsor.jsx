import React from 'react';
import {motion} from 'framer-motion'

function Sponsor() {
  return (
    <div className='max-w-screen p-5 md:p-10 bg-gray-800'>
      <h1 className='flex text-white font-bold text-6xl justify-center items-center'> Past Sponsors</h1>
        <div className='grid grid-cols-4 flex-wrap gap-x-5 gap-y-10 p-10 rounded-lg backdrop-blur-lg bg-opacity-60'>
            <motion.div initial={{ y: 20 }}
            whileInView={{ y: 0 }} transition={{duration:1}} className='col-span-4 flex justify-center items-center backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
              <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/central_coalfields_dji3gq.jpg" alt="" />
            </motion.div>
            <motion.div initial={{ x: -30 }}
            whileInView={{ x: 0 }} transition={{duration:0.8}} className='col-span-2 flex justify-center items-center p-5 backdrop-blur-2xl bg-opacity-60 rounded-lg bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/adani_fkjiw1.jpg" alt="" />
            </motion.div>
            <motion.div initial={{ x: 20 }}
            whileInView={{ x: 0 }} transition={{duration:0.8}} className='col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5  bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995308/bccl_w30lbh.jpg" alt="" />
            </motion.div>
            <motion.div initial={{ y: 10 }}
            whileInView={{ y: 0 }} transition={{duration:1.2}} className='col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/jh_tourism_kshayx.jpg" alt="" />
            </motion.div>
            <motion.div initial={{ x: 10 }}
            whileInView={{ x: 0 }} transition={{duration:1.2}} className='col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/sbi_ord5zl.png" alt="" />
            </motion.div>
            <motion.div initial={{ x: 30 }}
            whileInView={{ x: 0 }} transition={{duration:1.5}} className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/secl_r1vmoe.png" alt="" />
            </motion.div>
            <motion.div initial={{ y: -40 }}
            whileInView={{ y: 0 }} transition={{duration:1.1}} className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-auto bg-center'>
            <img className='rounded' src="" alt="" />
            </motion.div>
            <motion.div initial={{ x: 30 }}
            whileInView={{ x: 0 }} transition={{duration:1.8}} className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/essar_oil_xok7pz.png" alt="" />
            </motion.div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/tata_steel_s8nw20.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/ongc_lcwi8k.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/coal_india_eucoix.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/skoda_p0wqmu.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/canara_sye86r.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/sail_rzbrgs.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/powergrid_ysetpi.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/mg_xuoimg.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/dehaat_io8otn.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/parklane_n7rljx.jpg" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/lazzy_frog_wjwudq.jpg" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/coal_capital_jf6juf.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-auto bg-center'>
            <img className='rounded' src="" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/eng_parcel_zdfb7v.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-contain bg-center'>
            <img className='rounded' src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/realme_cgy4n5.png" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-auto bg-center'>
            <img className='rounded' src="" alt="" />
            </div>
            <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-5 bg-no-repeat bg-auto bg-center'><img className='rounded' src="" alt="" /></div>
        </div>
    </div>
  )
}

export default Sponsor