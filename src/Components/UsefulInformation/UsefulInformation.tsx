import React, { FC, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './UsefulInformation.scss'

const UsefulInformation: FC = () => {
    const [isBigPaddingNeed, setBigPaddingNeed] = useState<boolean>(true)

    const location = useLocation()

    useEffect(() => {
        if (
            location.pathname === '/' ||
            location.pathname === '/about' ||
            location.pathname === '/categories' ||
            location.pathname === '/contact'
        ) {
            setBigPaddingNeed(true)
        } else {
            setBigPaddingNeed(false)
        }
    }, [location.pathname])

    return (
        <section
            className={
                isBigPaddingNeed
                    ? 'useful-information with-big-pad'
                    : 'useful-information without-big-pad'
            }
        >
            <div className="useful-information-contacts">
                <p className="useful-information-contacts-description">
                    Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                    Suspendisse pellentesque dui, non felis. Maecenas facilisis.
                </p>
                <p className="useful-information-contacts-phonenumber">
                    — +61 (0) 383 766 284
                </p>
                <p className="useful-information-contacts-email">
                    — noreply@envato.com
                </p>
            </div>
            <div className="useful-information-useful-links">
                <h2 className="useful-information-useful-links-title useful-information-title">
                    USEFUL LINKS
                </h2>
                <ul className="useful-information-useful-links-list">
                    <li className="useful-information-useful-links-list-item useful-information-list-item">
                        <span className="useful-information-useful-links-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">30 day return policy</Link>
                    </li>
                    <li className="useful-information-useful-links-list-item useful-information-list-item">
                        <span className="useful-information-useful-links-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Free shipping</Link>
                    </li>
                    <li className="useful-information-useful-links-list-item useful-information-list-item">
                        <span className="useful-information-useful-links-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Quick delivery in 48h</Link>
                    </li>
                    <li className="useful-information-useful-links-list-item useful-information-list-item">
                        <span className="useful-information-useful-links-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Safe packages</Link>
                    </li>
                </ul>
            </div>
            <div className="useful-information-delivery">
                <h2 className="useful-information-delivery-title useful-information-title">
                    DELIVERY
                </h2>
                <ul className="useful-information-delivery-list">
                    <li className="useful-information-delivery-list-item useful-information-list-item">
                        <span className="useful-information-delivery-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">How it Works</Link>
                    </li>
                    <li className="useful-information-delivery-list-item useful-information-list-item">
                        <span className="useful-information-delivery-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Free Delivery</Link>
                    </li>
                    <li className="useful-information-delivery-list-item useful-information-list-item">
                        <span className="useful-information-delivery-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="useful-information-customer-service">
                <h2 className="useful-information-customer-service-title useful-information-title">
                    CUSTOMER SERVICE
                </h2>
                <ul className="useful-information-customer-service-list">
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Orders</Link>
                    </li>
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Downloads</Link>
                    </li>
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Addresses</Link>
                    </li>
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Account details</Link>
                    </li>
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Logout</Link>
                    </li>
                    <li className="useful-information-customer-service-list-item useful-information-list-item">
                        <span className="useful-information-customer-service-list-item-icon">
                            &#10162;
                        </span>
                        <Link to="/">Lost password</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default UsefulInformation
