import React, { FC } from 'react'
import { motion } from 'framer-motion'
import './Welcome.scss'

interface WelcomeProp {
    OpenPopUp: Function
}

const Welcome: FC<WelcomeProp> = ({ OpenPopUp }) => {
    return (
        <div className="welcome">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="welcome-img"
            >
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="welcome-icon"
                >
                    WELCOME TO
                </motion.div>
                <motion.h2
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -75, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="welcome-title"
                >
                    <span className="welcome-shop-online">online shop</span>{' '}
                    with car parts{' '}
                </motion.h2>
                <motion.h3
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="welcome-subtitle"
                >
                    Lorem ipsum dolor laoreet enim. Etiam ullamcorper.
                    Suspendisse a pellentesque dui laoreet enim.
                </motion.h3>
                <motion.button
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="welcome-btn"
                >
                    SEE OUR PRODUCTS &#62;
                </motion.button>
                <motion.div
                    initial={{ x: -70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="welcome-popup-video-img"
                ></motion.div>
                <motion.button
                    initial={{ x: -70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="welcome-popup-video-btn"
                    onClick={() => OpenPopUp()}
                ></motion.button>
            </motion.div>
        </div>
    )
}

export default Welcome
