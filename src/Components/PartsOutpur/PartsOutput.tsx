import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
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
}

const PartsOutput: FC = () => {
    const parts = useAppSelector((state) => state.parts.parts)

    return (
        <section className="parts-output">
            {parts.map(
                ({
                    id,
                    title,
                    price,
                    discount,
                    discountPrice,
                    productCode,
                    image,
                    manufacturer,
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
}) => {
    return (
        <div className="parts-item">
            <div className="parts-item-img">
                <img src={image} alt={title} />
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
                    <span>£{price}</span>
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
