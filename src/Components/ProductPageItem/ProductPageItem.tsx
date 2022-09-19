import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/hooks'
import './ProductPageItem.scss'

function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 150,
    magnifieWidth = 150,
    zoomLevel = 1.5,
}: {
    src: string
    width?: string
    height?: string
    magnifierHeight?: number
    magnifieWidth?: number
    zoomLevel?: number
}) {
    const [[x, y], setXY] = useState([0, 0])
    const [[imgWidth, imgHeight], setSize] = useState([0, 0])
    const [showMagnifier, setShowMagnifier] = useState(false)
    return (
        <div
            style={{
                position: 'relative',
                height: height,
                width: width,
            }}
        >
            <img
                src={src}
                style={{ height: height, width: width }}
                onMouseEnter={(e) => {
                    const elem = e.currentTarget
                    const { width, height } = elem.getBoundingClientRect()
                    setSize([width, height])
                    setShowMagnifier(true)
                }}
                onMouseMove={(e) => {
                    const elem = e.currentTarget
                    const { top, left } = elem.getBoundingClientRect()
                    const x = e.pageX - left - window.pageXOffset
                    const y = e.pageY - top - window.pageYOffset
                    setXY([x, y])
                }}
                onMouseLeave={() => {
                    setShowMagnifier(false)
                }}
                alt={'img'}
            />

            <div
                style={{
                    display: showMagnifier ? '' : 'none',
                    position: 'absolute',
                    pointerEvents: 'none',
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    border: '1px solid lightgray',
                    backgroundColor: 'white',
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: `${imgWidth * zoomLevel}px ${
                        imgHeight * zoomLevel
                    }px`,
                    backgroundPositionX: `${
                        -x * zoomLevel + magnifieWidth / 2
                    }px`,
                    backgroundPositionY: `${
                        -y * zoomLevel + magnifierHeight / 2
                    }px`,
                }}
            ></div>
        </div>
    )
}

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
                                <ImageMagnifier width={'100%'} src={image} />
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
