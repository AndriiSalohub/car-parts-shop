import React, { FC } from 'react'
import './Questions.scss'

interface QuestionsProps {
    children: React.ReactChild | React.ReactNode
}

const Questions: FC<QuestionsProps> = ({ children }) => {
    return (
        <section className="questions">
            <h2 className="questions-title">
                Do you have any{' '}
                <span className="questions-title-highlight">questions?</span>
            </h2>
            <div className="questions-content">
                <h3 className="questions-content-subtitle">Our address</h3>
                <p className="questions-content-address">
                    Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                    Australia
                </p>
                <div className="questions-content-phone-number">
                    <img
                        src="https://i.ibb.co/WpmgKQ8/smartphone-call-1.png"
                        alt="phone"
                        className="questions-content-phone-number-icon questions-content-icons"
                    />
                    <p className="questions-content-phone-number-text questions-content-text">
                        +61 (0) 383 766 284
                    </p>
                </div>
                <div className="questions-content-latters">
                    <img
                        src="https://i.ibb.co/xMRYNSb/email.png"
                        alt="letter"
                        className="questions-content-latters-icon questions-content-icons"
                    />
                    <p className="questions-content-latters-text questions-content-text">
                        {' '}
                        noreply@envato.com
                    </p>
                </div>
                <div className="questions-content-work-time">
                    <p className="questions-content-work-time-text">
                        Fusce ut velit laoreet, tempus arcu eu, molestie tortor.{' '}
                        <span className="questions-content-work-time-text-time">
                            Mon – Sat: 9 am – 6 pm
                        </span>
                    </p>
                </div>
            </div>
            <form className="questions-form">
                <input
                    type="text"
                    placeholder="Your name"
                    className="questions-form-input-name questions-form-inputs"
                />
                <input
                    type="email"
                    placeholder="Your email"
                    className="questions-form-input-email questions-form-inputs"
                />
                <input
                    type="text"
                    placeholder="Your subject"
                    className="questions-form-input-subject questions-form-inputs"
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="questions-form-area-message questions-form-inputs"
                    id="1"
                    cols={30}
                    rows={10}
                ></textarea>
                <button className="questions-form-btn">SEND A MESSAGE</button>
            </form>
            {children}
        </section>
    )
}

export default Questions
