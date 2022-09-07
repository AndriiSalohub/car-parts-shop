import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import CartItem from '../CartItem/CartItem'
import EmptyCartAlert from '../EmptyCartAlert/EmptyCartAlert'
import ReturnToShop from '../ReaturnToShop/ReturnToShop'
import './Cart.scss'

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
    const [open, setOpen] = useState(true)

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
            <div className={open ? 'cart-container' : 'cart-container close'}>
                {total === 0 ? (
                    <EmptyCartAlert open={open} setOpen={setOpen} />
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
            <ReturnToShop />
        </section>
    )
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
}

export default Cart
