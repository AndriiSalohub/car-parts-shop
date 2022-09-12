import React, { FC } from 'react'
import { doc, setDoc } from '@firebase/firestore'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { changePartAmount } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { increaseTotal } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'
import { NavLink } from 'react-router-dom'
import { setCurrentPageIdByUser } from '../../ReduxToolkit/Slices/CurrentPageId/CurrentPageId'
import db from '../../firebase'
import './PartsOutput.scss'

interface PartsItemProps {
    id: number
    title: string
    price: number
    discount: boolean
    discountPrice: number
    productCode: string
    image: string
    manufacturer: string
    docId: string
}

interface PartsOutputProps {
    array: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
        popularity: number
        averageRating: number
        docId: string
    }>
}

const PartsOutput: FC<PartsOutputProps> = ({ array }) => {
    const filterTerm = useAppSelector((state) => state.filter.filterTerm)

    let filteredArray = [...array]

    filteredArray.sort((a, b) => (a.id > b.id ? 1 : -1))

    return (
        <section className="parts-output">
            {filteredArray
                .sort((a, b) => {
                    switch (filterTerm) {
                        case 'sort by popularity':
                            return a.popularity > b.popularity ? 1 : -1
                        case 'sort by average rating':
                            return a.averageRating > b.averageRating ? 1 : -1
                        case 'sort by latest':
                            return a.id < b.id ? 1 : -1
                        case 'sort by price: low to high':
                            if (a.discount === true && b.discount === false) {
                                return a.discountPrice > b.price ? 1 : -1
                            } else if (
                                a.discount === false &&
                                b.discount === true
                            ) {
                                return a.price > b.discountPrice ? 1 : -1
                            } else if (a.discount && b.discount) {
                                if (a.discountPrice === b.discountPrice) {
                                    return a.price > b.price ? 1 : -1
                                }
                                return a.discountPrice > b.discountPrice
                                    ? 1
                                    : -1
                            } else {
                                return a.price > b.price ? 1 : -1
                            }
                        case 'sort by price: high to low':
                            if (a.discount === true && b.discount === false) {
                                return a.discountPrice < b.price ? 1 : -1
                            } else if (
                                a.discount === false &&
                                b.discount === true
                            ) {
                                return a.price < b.discountPrice ? 1 : -1
                            } else if (a.discount && b.discount) {
                                if (a.discountPrice === b.discountPrice) {
                                    return a.price < b.price ? 1 : -1
                                }
                                return a.discountPrice < b.discountPrice
                                    ? 1
                                    : -1
                            } else {
                                return a.price < b.price ? 1 : -1
                            }
                        default:
                            return a.id > b.id ? 1 : -1
                    }
                })
                .map(
                    ({
                        id,
                        title,
                        price,
                        discount,
                        discountPrice,
                        productCode,
                        image,
                        manufacturer,
                        docId,
                    }: PartsItemProps) => (
                        <PartsItem
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            discount={discount}
                            discountPrice={discountPrice}
                            productCode={productCode}
                            image={image}
                            manufacturer={manufacturer}
                            docId={docId}
                        />
                    )
                )}
        </section>
    )
}

const PartsItem: FC<PartsItemProps> = ({
    id,
    title,
    price,
    discount,
    discountPrice,
    productCode,
    image,
    manufacturer,
    docId,
}) => {
    const dispatch: Function = useAppDispatch()
    const parts: Array<{
        id: number
        docId: string
        amount: number
    }> = useAppSelector((state) => state.parts.parts)
    const totalAmount = useAppSelector((state) => state.total)
    const currentPageId = useAppSelector((state) => state.currentPageId)

    const handleBuy: Function = async (id: number, docId: string) => {
        const currentAmount = parts.find((part) => part.id === id)?.amount
        const docRef = doc(db, 'parts', docId)
        const payload = {
            ...parts.find((part) => part.id === id),
            amount: currentAmount === undefined ? 0 + 1 : currentAmount + 1,
        }
        delete payload.docId
        await setDoc(docRef, payload)
        dispatch(changePartAmount(id))
    }

    const changeTotal: Function = async (total: number, totalId: string) => {
        const docRef = doc(db, 'total', totalId)
        const payload = { total: total + 1 }
        await setDoc(docRef, payload)
        dispatch(increaseTotal())
    }

    const setCurrentPageId = async (id: number, docId: string) => {
        const docRef = doc(db, 'currentPageId', docId)
        const payload = { currentPageId: id }
        await setDoc(docRef, payload)
        dispatch(setCurrentPageIdByUser(id))
    }

    return (
        <div className="parts-item">
            <div className="parts-item-img">
                <img src={image} alt={title} />
                <div className="parts-item-img-buttons">
                    <button
                        className="parts-item-img-buttons-btn"
                        onClick={async () => {
                            await handleBuy(id, docId)
                            await changeTotal(totalAmount.total, totalAmount.id)
                        }}
                    >
                        <img
                            src="https://i.ibb.co/WyKfWDj/shopping-cart.png"
                            alt="cart"
                            className="parts-item-img-buttons-btn-img"
                        />
                    </button>
                    <NavLink
                        to={`/shop/${productCode}`}
                        onClick={() => setCurrentPageId(id, currentPageId.id)}
                    >
                        <button className="parts-item-img-buttons-btn parts-item-img-buttons-btn-link">
                            <img
                                src="https://i.ibb.co/C7qWy3r/link.png"
                                alt="link"
                                className="parts-item-img-buttons-btn-img"
                            />
                        </button>
                    </NavLink>
                </div>
            </div>
            <h2 className="parts-item-title">{title}</h2>
            <p className="parts-item-price">
                {discount ? (
                    <>
                        <span
                            style={{
                                textDecoration: 'line-through',
                            }}
                        >
                            £{price}
                        </span>
                        <span>£{discountPrice}</span>
                    </>
                ) : (
                    <span>£{price.toFixed(2)}</span>
                )}
            </p>
            <p className="parts-item-product-code parts-item-product-information">
                ProductCode: {productCode}
            </p>
            <p className="parts-item-manufacturer parts-item-product-information">
                Manufacturer: {manufacturer}
            </p>
        </div>
    )
}

export default PartsOutput
