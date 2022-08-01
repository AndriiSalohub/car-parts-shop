import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.scss'

interface WelcomeProp {
    OpenPopUp: Function
}

const Welcome = ({ OpenPopUp }: WelcomeProp) => {
    return (
        <div className="welcome">
            <div className="welcome-img">
                <div className="welcome-icon">WELCOME TO</div>
                <h2 className="welcome-title">
                    <span className="welcome-shop-online">online shop</span>{' '}
                    with car parts{' '}
                </h2>
                <h3 className="welcome-subtitle">
                    Lorem ipsum dolor laoreet enim. Etiam ullamcorper.
                    Suspendisse a pellentesque dui laoreet enim.
                </h3>
                <button className="welcome-btn">SEE OUR PRODUCTS &#62;</button>
                <div className="welcome-popup-video-img"></div>
                <button
                    className="welcome-popup-video-btn"
                    onClick={() => OpenPopUp()}
                ></button>
            </div>
        </div>
    )
}

export default Welcome
