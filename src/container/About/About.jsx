import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import './About.scss'

const abouts = [
    { title: 'Web Development', description: ' I am a good develoepr', imageUrl: images.about01 },
    { title: 'App Developer', description: ' I am a good develoepr', imageUrl: images.about02 },
    { title: 'React Developer', description: ' I am a good develoepr', imageUrl: images.about03 },
    { title: 'Node Js Developer ', description: ' I am a good develoepr', imageUrl: images.about04 },
]
const About = () => {
    return (
        <>
            <h2 className='head-text'>
                I know that
                <span> Good Apps </span>
                means
                <span> Good Business</span>
            </h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={about.imageUrl} alt={about.title} />
                        <h2 className='bold-text' style={{ margintop: 20 }}>{about.title} </h2>
                        <p className='p-text' style={{ margintop: 10 }}>{about.description} </p>

                    </motion.div>
                ))}
            </div>

        </>
    )
}

export default About