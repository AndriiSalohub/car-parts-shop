import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/hooks'
import './ReturnToShop.scss'

const ReturnToShop: FC = () => {
    const { total } = useAppSelector((state) => state.total)

    const navigate = useNavigate()

    return (
        <button
            className="cart-return-to-shop-btn"
            onClick={() => navigate('/shop')}
            style={{
                display: total <= 0 ? 'block' : 'none',
            }}
        >
            Return to shop
        </button>
    )
}

export default ReturnToShop
