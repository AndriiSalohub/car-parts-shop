import React, { FC } from 'react'
import { useAppDispatch } from '../../Hooks/hooks'
import { setFaqVideoOpen } from '../../ReduxToolkit/Slices/FaqSlice/FaqSlice'
import './Faq.scss'

interface FaqProps {
    children: React.ReactChild | React.ReactNode
}

const Faq: FC<FaqProps> = ({ children }) => {
    const dispatch = useAppDispatch()

    return (
        <section className="faq">
            <h2 className="faq-title">
                Mauris rhoncus orci in imperdiet placerat volutpat
            </h2>
            <h3 className="faq-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mauris dolor, gravida ridiculu.
            </h3>
            <p className="faq-link">
                Go to FAQ{' '}
                <img
                    src="https://i.ibb.co/0tBCjbn/right-arrow.png"
                    alt="arrow"
                />
            </p>
            <div className="faq-video">
                <button
                    className="faq-video-btn"
                    onClick={() => dispatch(setFaqVideoOpen())}
                >
                    <img
                        src="https://i.ibb.co/LSkHj0v/right-arrow-black-triangle.png"
                        alt="button"
                        className="faq-video-btn-icon"
                    />
                </button>
            </div>
            {children}
        </section>
    )
}

export default Faq
