import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headTextAnimation,
    slideAnimation,
    headContentAnimation
} from '../config/motion';


import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>

                <motion.header {...slideAnimation('down')}>
                    <img src="./12.png" alt="" className='w-8 h-8 object-contain'/>
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='text-7xl font-sans' >
                            GUTU TICH <br className='xl:block hidden'/> bY YoU
                        </h1>

                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Explore your creativity on our fabrics. <strong>Show us what you've got</strong>,
                            and let your ideas come to reality with our custom apparel designer. 
                            With cutting edge technology to <strong>visualize your garment</strong> in real time and
                            ultra high-defintion.

                            No need for the strenuous process of trying to get your idea across and not 
                            finding quite the right words to use. Well now, our desings are <strong>bY YoU</strong>.
                        </p>
                        <CustomButton 
                        type="filled"
                        title= "BUILD"
                        handleClick={() => state.intro = false}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />

                    </motion.div>

                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home