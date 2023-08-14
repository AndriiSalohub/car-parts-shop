import { doc, setDoc } from '@firebase/firestore'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { changePartAmount } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { increaseTotal } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'
import db from '../../firebase'
import './ProductPageItem.scss'

const ProductPageItem: FC = () => {
    const parts: Array<{
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
        amount: number
        categories: Array<string>
    }> = useAppSelector((state) => state.parts.parts)
    const dispatch: Function = useAppDispatch()

    const { currentPageId } = useAppSelector((state) => state.currentPageId)

    const navigate = useNavigate()

    const totalAmount = useAppSelector((state) => state.total)

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

    return (
        <>
            <div className="product-page-item">
                {parts.map(
                    ({
                        id,
                        image,
                        categories,
                        title,
                        price,
                        productCode,
                        manufacturer,
                        discount,
                        discountPrice,
                        docId,
                    }) => {
                        if (id === currentPageId) {
                            return (
                                <div
                                    className="product-page-item-container"
                                    key={id}
                                >
                                    <img
                                        className="product-page-item-image"
                                        src={image}
                                        alt="product-item-img"
                                    />
                                    <div className="product-page-item-information">
                                        <h2 className="product-page-item-information-title">
                                            {title}
                                        </h2>
                                        <div className="product-page-item-information-line"></div>
                                        <p className="product-page-item-information-price">
                                            £
                                            {discount
                                                ? discountPrice.toFixed(2)
                                                : price.toFixed(2)}
                                        </p>
                                        <p className="product-page-item-information-product-code">
                                            Product Code: {productCode}
                                        </p>
                                        <p className="product-page-item-information-manufacturer">
                                            Manufacturer: {manufacturer}
                                        </p>
                                        <button
                                            className="product-page-item-information-add-btn"
                                            onClick={async () => {
                                                await handleBuy(id, docId)
                                                await changeTotal(
                                                    totalAmount.total,
                                                    totalAmount.id
                                                )
                                            }}
                                        >
                                            Add to cart
                                        </button>
                                        <div className="product-page-item-information-categories">
                                            SKU: 480{' '}
                                            <span className="product-page-item-information-categories-title">
                                                Categories:{' '}
                                            </span>
                                            {categories.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <span
                                                            className="product-page-item-information-categories-categorie"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/categories/${item}`
                                                                )
                                                            }
                                                        >{`${item}${
                                                            index ===
                                                            categories.length -
                                                                1
                                                                ? ' '
                                                                : ', '
                                                        }`}</span>
                                                    )
                                                }
                                            )}
                                        </div>
                                        <div className="product-page-item-information-share">
                                            Share
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthemes.muffingroup.com%2Fbe%2Fcarparts%2Fproduct%2Faliquam-sem%2F">
                                                <img
                                                    src="https://i.ibb.co/mBSRbf4/facebook-app-symbol.png"
                                                    alt="facebook"
                                                />
                                            </a>
                                            <a href="https://twitter.com/intent/tweet?text=Aliquam+sem+%26%238211%3B+BeCarParts+%26%238211%3B+Betheme.+https%3A%2F%2Fthemes.muffingroup.com%2Fbe%2Fcarparts%2Fproduct%2Faliquam-sem%2F">
                                                <img
                                                    src="https://i.ibb.co/6wX7G76/twitter.png"
                                                    alt="twitter"
                                                />
                                            </a>
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fthemes.muffingroup.com%2Fbe%2Fcarparts%2Fproduct%2Faliquam-sem%2F">
                                                <img
                                                    src="https://i.ibb.co/jMs2c5r/linkedin.png"
                                                    alt="linkedin"
                                                />
                                            </a>
                                            <a href="https://pinterest.com/pin/find/?url=https%3A%2F%2Fthemes.muffingroup.com%2Fbe%2Fcarparts%2Fproduct%2Faliquam-sem%2F">
                                                <img
                                                    src="https://i.ibb.co/njDkzcn/pinterest.png"
                                                    alt="pinterest"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
                <p className="product-page-item-description description">
                    Lorem ipsum dolor sit amet mauris. Pellentesque fringilla
                    eget, orci. Cum sociis natoque penatibus et lorem. Fusce
                    nonummy malesuada, arcu turpis dolor, dictum sem. Nam lectus
                    orci, sollicitudin a, laoreet venenatis placerat, nisl neque
                    lorem, tempus enim consectetuer ut, tempus tellus. Donec
                    eleifend purus in massa. Maecenas consequat, metus tellus,
                    elementum odio nonummy turpis. Morbi quam eu diam.
                </p>
                <ul className="product-page-item-list">
                    <li className="product-page-item-list-item">
                        <span>Fusce ullamcorper</span>: Aenean sit
                    </li>
                    <li className="product-page-item-list-item">
                        <span>Tellus non urna felis</span>: 520g
                    </li>
                    <li className="product-page-item-list-item">
                        <span>Malesuada fames</span>: 48mm
                    </li>
                    <li className="product-page-item-list-item">
                        <span>Vestibulum tortor</span>: 24mm
                    </li>
                </ul>
                <p className="product-page-item-subdescription description">
                    Class aptent taciti sociosqu ad litora torquent per inceptos
                    hymenaeos. Fusce fringilla tempus ultrices, dui a wisi.
                    Aenean sit amet, est. Vivamus faucibus orci at ipsum dolor
                    tellus ante nec erat id nibh. Aliquam quis orci. Donec
                    scelerisque a, lorem. Cras tempus.
                </p>
                <div className="product-page-item-contacts">
                    <h2 className="product-page-item-contacts-title">
                        LOOKING FOR PARTS TO YOUR VEHICLE?
                    </h2>
                    <p className="product-page-item-contacts-phone">
                        +61 (0) 383 766 284
                    </p>
                    <p className="product-page-item-contacts-days">
                        WE ARE AVAILABLE MONDAY – FRIDAY
                    </p>
                    <p className="product-page-item-contacts-time">
                        08:00 AM – 6:30 PM
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductPageItem
