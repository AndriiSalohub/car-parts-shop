import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/hooks'
import './ProductPageItem.scss'

const ProductPageItem = () => {
    const parts: Array<{
        id: number
        image: string
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        categories: Array<string>
    }> = useAppSelector((state) => state.parts.parts)
    const { currentPageId } = useAppSelector((state) => state.currentPageId)

    const navigate = useNavigate()

    return (
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
                }) => {
                    if (id === currentPageId) {
                        return (
                            <div
                                className="product-page-item-container"
                                key={id}
                            >
                                <img
                                    src={image}
                                    alt="product-image"
                                    className="product-page-item-image"
                                />
                                <div className="product-page-item-information">
                                    <h2 className="product-page-item-information-title">
                                        {title}
                                    </h2>
                                    <div className="product-page-item-information-line"></div>
                                    <p className="product-page-item-information-price">
                                        £{price}
                                    </p>
                                    <p className="product-page-item-information-product-code">
                                        Product Code: {productCode}
                                    </p>
                                    <p className="product-page-item-information-manufacturer">
                                        Manufacturer: {manufacturer}
                                    </p>
                                    <button className="product-page-item-information-add-btn">
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
                                                        categories.length - 1
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
        </div>
    )
}

export default ProductPageItem
