import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.scss'

const AboutUs: FC = () => {
    return (
        <div className="about-us">
            <div className="about-us-information">
                <div className="about-us-information-icon">HOW WE WORK</div>
                <h2 className="about-us-information-title">
                    Our mission is to deliver car parts you need at a good price
                </h2>
                <div className="about-us-information-missions">
                    <p className="about-us-information-missions-first about-us-missions">
                        <span className="about-us-mission-icon">&#10162;</span>{' '}
                        Mauris rhoncus orci in imperdiet placerat.
                    </p>
                    <p className="about-us-information-missions-second about-us-missions">
                        <span className="about-us-mission-icon">&#10162;</span>{' '}
                        Vestibulum euismod nisl suscipit ligula volutpat feugiat
                    </p>
                    <p className="about-us-information-missions-third about-us-missions">
                        <span className="about-us-mission-icon">&#10162;</span>{' '}
                        Cras massa nibh, tincidunt ut eros vulputate odio
                    </p>
                </div>
                <button className="about-us-information-more-btn">
                    <Link to="about"> MORE ABOUT US &#62;</Link>
                </button>
            </div>
            <div className="about-us-images">
                <img
                    src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-home-pic1.png"
                    alt="about-us"
                    className="about-us-images-img"
                />
            </div>
        </div>
    )
}

export default AboutUs
