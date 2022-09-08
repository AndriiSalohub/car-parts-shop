import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import './ToCheckout.scss'

const ToCheckout: FC = () => {
    const { total } = useAppSelector((state) => state.total)
    const parts: Array<{
        id: number
        docId: string
        amount: number
        price: number
        discount: boolean
        discountPrice: number
    }> = useAppSelector((state) => state.parts.parts)
    let totalPrice = 0

    parts.forEach((part) => {
        if (part.amount > 0) {
            if (part.discount) {
                totalPrice += part.amount * part.discountPrice
            } else {
                totalPrice += part.amount * part.price
            }
        }
    })

    return (
        <div
            className="cart-checkout"
            style={{
                display: total > 0 ? 'block' : 'none',
            }}
        >
            <h2 className="cart-checkout-title">Cart totals</h2>
            <div className="cart-checkout-container">
                <div className="cart-checkout-subtotal">
                    <h3 className="cart-checkout-subtotal-title cart-checkout-container-title">
                        Subtotal:
                    </h3>
                    <p className="cart-checkout-subtotal-information cart-checkout-container-information">
                        £{totalPrice}
                    </p>
                </div>
                <div className="cart-checkout-total">
                    <h3 className="cart-checkout-total-title cart-checkout-container-title">
                        Total:
                    </h3>
                    <p className="cart-checkout-total-information cart-checkout-container-information">
                        £{totalPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ToCheckout
