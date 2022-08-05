import React, { FC } from 'react'
import './OurContacts.scss'

const OurContacts: FC = () => {
    return (
        <div className="our-contacts">
            <div className="our-contacts-icon">
                LOOKING FOR PARTS TO YOUR VEHICLE?
            </div>
            <p className="our-contacts-phone-number">
                {' '}
                <span className="our-contacts-phone-number-icon">
                    <img
                        src="https://i.ibb.co/tmh9GHq/smartphone-call.png"
                        alt="telephone"
                    />
                </span>{' '}
                +61 (0) 383 766 284
            </p>
            <h2 className="our-contacts-title">
                WE ARE AVAILABLE MONDAY - FRIDAY
            </h2>
            <p className="our-contacts-work-time">08:00 AM - 6:30 PM</p>
        </div>
    )
}

export default OurContacts
