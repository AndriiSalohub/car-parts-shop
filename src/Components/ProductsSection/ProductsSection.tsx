import React, { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { doc, setDoc } from '@firebase/firestore'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { changePartAmount } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { increaseTotal } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'
import { setCurrentPageIdByUser } from '../../ReduxToolkit/Slices/CurrentPageId/CurrentPageId'
import db from '../../firebase'
import './ProductsSection.scss'

interface ProductsSectionProps {
    sectionTitle: string
    products: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
        docId: string
    }>
}

interface ProductItemProps {
    id: number
    docId: string
    title: string
    price: number
    discount: boolean
    discountPrice: number
    productCode: string
    manufacturer: string
    image: string
}

const ProductsSection: FC<ProductsSectionProps> = ({
    sectionTitle,
    products,
}) => {
    return (
        <div className="products-section">
            <div className="products-section-information">
                <h2 className="products-section-title">{sectionTitle}</h2>

                <button className="products-section-btn">
                    <Link to="cart"> SEE ALL PRODUCTS &#62;</Link>
                </button>
            </div>
            <div className="products-section-products">
                {products.map(
                    ({
                        id,
                        title,
                        price,
                        discount,
                        discountPrice,
                        productCode,
                        manufacturer,
                        image,
                        docId,
                    }) => (
                        <ProductItem
                            key={id}
                            id={id}
                            docId={docId}
                            title={title}
                            price={price}
                            discount={discount}
                            discountPrice={discountPrice}
                            productCode={productCode}
                            manufacturer={manufacturer}
                            image={image}
                        />
                    )
                )}
            </div>
        </div>
    )
}

const ProductItem: FC<ProductItemProps> = ({
    title,
    price,
    discount,
    discountPrice,
    productCode,
    manufacturer,
    image,
    id,
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
        <div className="product-item">
            <div className="product-item-img-container">
                {' '}
                <motion.img
                    src={image}
                    alt={title}
                    whileHover={{ scale: 1.2 }}
                    className="product-item-img"
                />
                <div className="product-item-img-container-buttons">
                    <button className="product-item-img-container-buttons-btn">
                        <img
                            src="https://i.ibb.co/WyKfWDj/shopping-cart.png"
                            alt="cart"
                            className="product-item-img-container-buttons-btn-img"
                            onClick={async () => {
                                await handleBuy(id, docId)
                                await changeTotal(
                                    totalAmount.total,
                                    totalAmount.id
                                )
                            }}
                        />
                    </button>
                    <NavLink
                        to={`/shop/${productCode}`}
                        onClick={() => setCurrentPageId(id, currentPageId.id)}
                    >
                        <button className="product-item-img-container-buttons-btn product-item-img-container-buttons-btn-link">
                            <img
                                src="https://i.ibb.co/C7qWy3r/link.png"
                                alt="link"
                                className="product-item-img-container-buttons-btn-img"
                            />
                        </button>
                    </NavLink>
                </div>
            </div>
            <h2 className="product-item-title">{title}</h2>
            {discount ? (
                <p className="product-item-price">
                    <span
                        className="default-price"
                        style={{
                            textDecoration: 'line-through',
                        }}
                    >
                        £{price}
                    </span>{' '}
                    <span className="price-with-discount">
                        £{discountPrice}
                    </span>
                </p>
            ) : (
                <p className="product-item-price">
                    <span className="default-price">£{price}</span>{' '}
                </p>
            )}
            <span
                className="price-with-discount-tryangel"
                style={
                    discount
                        ? {
                              display: 'block',
                          }
                        : {
                              display: 'none',
                          }
                }
            ></span>
            <span
                className="price-with-discount-icon"
                style={
                    discount
                        ? {
                              display: 'block',
                          }
                        : {
                              display: 'none',
                          }
                }
            >
                &#9733;
            </span>
            <p className="product-item-product-code">
                Product-Code: {productCode}
            </p>
            <p className="product-item-manufacturer">
                Manufacturer: {manufacturer}
            </p>
        </div>
    )
}

export default ProductsSection
