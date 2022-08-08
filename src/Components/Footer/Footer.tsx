import React, { FC } from 'react'
import './Footer.scss'

const Footer: FC = () => {
    const scrollUpSmooth: Function = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const scrollUp: Function = (): void => {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <footer className="footer">
            <p className="footer-copyright">
                © 2021 Betheme by <span>Muffin group</span> | All Rights
                Reserved | Powered by <span>WordPress</span>
            </p>
            <ul className="footer-list">
                <li className="footer-list-item" onClick={() => scrollUp()}>
                    Terms and conditions
                </li>
                <li className="footer-list-item" onClick={() => scrollUp()}>
                    Privacy policy
                </li>
                <li className="footer-list-item" onClick={() => scrollUp()}>
                    Cookies
                </li>
            </ul>
            <div className="footer-tick" onClick={() => scrollUpSmooth()}>
                <img src="https://i.ibb.co/0GsKZCG/upload.png" alt="tick" />
            </div>
        </footer>
    )
}

export default Footer
