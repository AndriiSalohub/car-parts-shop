import React, { FC, useEffect, useState } from 'react'
import { doc, setDoc } from '@firebase/firestore'
import { useAppSelector, useAppDispatch } from '../../Hooks/hooks'
import { clearPartAmount } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import db from '../../firebase'
import './Cart.scss'
import { changeTotalAmount } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'

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

interface PartProps {
    id: number
    docId: string
    title: string
    price: number
    discount: boolean
    discountPrice: number
    amount: number
    image: string
}

const Cart: FC = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    const { total } = useAppSelector((state) => state.total)
    const parts = useAppSelector((state) => state.parts.parts)

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <section className="cart">
            <div className="cart-container">
                {total === 0 ? (
                    <div
                        className="cart-empty"
                        style={{
                            opacity: total ? 0 : 1,
                        }}
                    >
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
                ) : windowSize.innerWidth > 768 ? (
                    <>
                        <div className="cart-top-infromation">
                            <h2 className="cart-top-infromation-product cart-top-infromation-titles">
                                Product
                            </h2>
                            <h2 className="cart-top-infromation-price cart-top-infromation-titles">
                                Price
                            </h2>
                            <h2 className="cart-top-infromation-quantity cart-top-infromation-titles">
                                Quantity
                            </h2>
                            <h2 className="cart-top-infromation-subtotal cart-top-infromation-titles">
                                Subtotal
                            </h2>
                        </div>
                        {parts
                            .filter((part: any) => part.amount > 0)
                            .map(
                                ({
                                    id,
                                    title,
                                    discountPrice,
                                    price,
                                    docId,
                                    image,
                                    discount,
                                    amount,
                                }: PartProps) => (
                                    <CartItem
                                        key={id}
                                        id={id}
                                        title={title}
                                        price={price}
                                        discount={discount}
                                        discountPrice={discountPrice}
                                        image={image}
                                        docId={docId}
                                        amount={amount}
                                    />
                                )
                            )}
                    </>
                ) : (
                    parts
                        .filter((part: any) => part.amount > 0)
                        .map(
                            ({
                                id,
                                title,
                                discountPrice,
                                price,
                                docId,
                                image,
                                discount,
                                amount,
                            }: PartProps) => (
                                <CartItem
                                    key={id}
                                    id={id}
                                    title={title}
                                    price={price}
                                    discount={discount}
                                    discountPrice={discountPrice}
                                    image={image}
                                    docId={docId}
                                    amount={amount}
                                />
                            )
                        )
                )}
            </div>
        </section>
    )
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
                        £{price}
                    </p>
                    <p className="cart-item-quantity cart-item-text-content">
                        {amount}
                    </p>
                    <p className="cart-item-total cart-item-text-content">
                        £{amount * price}
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
                            {discount ? discountPrice : price}
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
                            {amount * price}
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

export default Cart
