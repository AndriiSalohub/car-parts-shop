import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './ReturnToShop.scss'

const ReturnToShop: FC = () => {
    const navigate = useNavigate()

    return (
        <button
            className="cart-return-to-shop-btn"
            onClick={() => navigate('/shop')}
        >
            Return to shop
        </button>
    )
}

export default ReturnToShop
