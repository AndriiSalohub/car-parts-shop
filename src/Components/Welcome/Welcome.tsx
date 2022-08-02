import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.scss'

interface WelcomeProp {
    OpenPopUp: Function
}

const Welcome = ({ OpenPopUp }: WelcomeProp) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="welcome"
        >
            <div className="welcome-img">
                <motion.div
                    initial={{ y: 100, x: -10, opacity: 0 }}
                    animate={{ y: 40, x: -10, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="welcome-icon"
                >
                    WELCOME TO
                </motion.div>
                <motion.h2
                    initial={{ y: 100, x: -30, opacity: 0 }}
                    animate={{ y: -50, x: -30, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="welcome-title"
                >
                    <span className="welcome-shop-online">online shop</span>{' '}
                    with car parts{' '}
                </motion.h2>
                <motion.h3
                    initial={{ y: 100, x: -25, opacity: 0 }}
                    animate={{ y: -70, x: -25, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="welcome-subtitle"
                >
                    Lorem ipsum dolor laoreet enim. Etiam ullamcorper.
                    Suspendisse a pellentesque dui laoreet enim.
                </motion.h3>
                <motion.button
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: -100, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="welcome-btn"
                >
                    SEE OUR PRODUCTS &#62;
                </motion.button>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="welcome-popup-video-img"
                ></motion.div>
                <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="welcome-popup-video-btn"
                    onClick={() => OpenPopUp()}
                ></motion.button>
            </div>
        </motion.div>
    )
}

export default Welcome
