import React, { FC } from 'react'
import './Advantages.scss'

const Advantages: FC = () => {
    return (
        <section className="advantages">
            <div className="advantages-return">
                <img
                    className="advantages-return-img advantages-img"
                    src="https://i.ibb.co/MRMdQF4/return.png"
                    alt="30-days return"
                />
                <h2 className="advantages-return-title advantages-title">
                    30 days return
                </h2>
                <p className="advantages-return-description advantages-description">
                    Vivamus in diam turpis. In quis nibh magna maximus
                    tristique.
                </p>
            </div>
            <div className="advantages-free-shipping">
                <img
                    className="advantages-free-shipping-img advantages-img"
                    src="https://i.ibb.co/9wDNMkV/shipping.png"
                    alt="free shipping"
                />
                <h2 className="advantages-free-shipping-title advantages-title">
                    Free shipping
                </h2>
                <p className="advantages-free-shipping-description advantages-description">
                    Sed ultrices nisl velit, eu ornare est ullamcorper quis
                    magna.
                </p>
            </div>
            <div className="advantages-quick-delivery">
                <img
                    className="advantages-quick-delivery-img advantages-img"
                    src="https://i.ibb.co/S7fN6GG/fast-delivery.png"
                    alt="quick delivery"
                />
                <h2 className="advantages-quick-delivery-title advantages-title">
                    Quick delivery
                </h2>
                <p className="advantages-quick-delivery-description advantages-description">
                    Maecenas imperdiet ante eget hendrerit posuere urna.
                </p>
            </div>
            <div className="advantages-safe-packages">
                <img
                    className="advantages-safe-packages-img advantages-img"
                    src="https://i.ibb.co/VjcYVpq/safe-packages.png"
                    alt="safe packages"
                />
                <h2 className="advantages-safe-packages-title advantages-title">
                    Safe packages
                </h2>
                <p className="advantages-safe-packages-description advantages-description">
                    Vivamus in diam turpis. In condi mentum maximus tristique.
                </p>
            </div>
        </section>
    )
}

export default Advantages
