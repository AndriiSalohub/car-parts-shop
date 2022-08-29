import React, { FC } from 'react'
import './Cart.scss'

const Cart: FC = () => {
    return (
        <section className="cart">
            <div className="cart-empty">
                <img
                    src="https://i.ibb.co/VLTdmNX/bulb-3.png"
                    alt="lightbulb"
                    className="cart-empty-lightbulb"
                />
                <h2 className="cart-empty-title">
                    Your cart is currently empty.
                </h2>
                <img
                    src="https://i.ibb.co/K7t92ng/close-1.png"
                    alt="close"
                    className="cart-empty-close"
                />
            </div>
        </section>
    )
}

export default Cart
