import { doc, setDoc } from '@firebase/firestore'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { clearPartAmount } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { changeTotalAmount } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'
import db from '../../firebase'
import './CartItem.scss'

interface CartItemProps {
    id: number
    docId: string
    title: string
    price: number
    discount: boolean
    discountPrice: number
    amount: number
    image: string
}

const CartItem: FC<CartItemProps> = ({
    id,
    title,
    price,
    discount,
    discountPrice,
    image,
    amount,
    docId,
}) => {
    const dispatch: Function = useAppDispatch()
    const parts: Array<{
        id: number
        docId: string
        amount: number
    }> = useAppSelector((state) => state.parts.parts)
    const total = useAppSelector((state) => state.total)

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const handleDeleteAll = async (partId: number, docId: string) => {
        const docRef = doc(db, 'parts', docId)
        const payload = {
            ...parts.find((part) => part.id === partId),
            amount: 0,
        }
        delete payload.docId
        await setDoc(docRef, payload)
        dispatch(clearPartAmount(partId))
    }

    const changeTotal: Function = async (
        total: number,
        totalId: string,
        amount: number
    ) => {
        const docRef = doc(db, 'total', totalId)
        const payload = { total: total - amount }
        await setDoc(docRef, payload)
        dispatch(changeTotalAmount(amount))
    }

    return (
        <div className="cart-item">
            {window.innerWidth > 768 ? (
                <>
                    <img src={image} alt="part" className="cart-item-img" />
                    <h2 className="cart-item-title">{title}</h2>
                    <p className="cart-item-price cart-item-text-content">
                        £{discount ? discountPrice : price.toFixed(2)}
                    </p>
                    <p className="cart-item-quantity cart-item-text-content">
                        {amount}
                    </p>
                    <p className="cart-item-total cart-item-text-content">
                        £
                        {discount
                            ? (amount * discountPrice).toFixed(2)
                            : (amount * price).toFixed(2)}
                    </p>
                    <button
                        className="cart-item-delete-btn"
                        onClick={() => {
                            handleDeleteAll(id, docId)
                            changeTotal(total.total, total.id, amount)
                        }}
                    >
                        x
                    </button>
                </>
            ) : (
                <>
                    <div className="cart-item-title cart-item-containers">
                        <p className="cart-item-title-name cart-item-containers-names">
                            Product:
                        </p>
                        <h2 className="cart-item-title-title cart-item-containers-information">
                            {title}
                        </h2>
                    </div>
                    <div className="cart-item-price cart-item-containers">
                        <p className="cart-item-price-name cart-item-containers-names">
                            Price:
                        </p>
                        <h2 className="cart-item-price-title cart-item-containers-information">
                            {discount
                                ? discountPrice.toFixed(2)
                                : price.toFixed(2)}
                        </h2>
                    </div>
                    <div className="cart-item-quantity cart-item-containers">
                        <p className="cart-item-quantity-name cart-item-containers-names">
                            Quantity:
                        </p>
                        <p className="cart-item-quantity-amount cart-item-containers-information">
                            {amount}
                        </p>
                    </div>
                    <div className="cart-item-total cart-item-containers">
                        <p className="cart-item-total-name cart-item-containers-names">
                            Total:
                        </p>
                        <p className="cart-item-total-price cart-item-containers-information">
                            {discount
                                ? (amount * discountPrice).toFixed(2)
                                : (amount * price).toFixed(2)}
                        </p>
                    </div>
                    <button
                        className="cart-item-delete-btn"
                        onClick={() => {
                            handleDeleteAll(id, docId)
                            changeTotal(total.total, total.id, amount)
                        }}
                    >
                        X
                    </button>
                </>
            )}
        </div>
    )
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
}

export default CartItem
