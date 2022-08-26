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
    }> = useAppSelector((state) => state.parts.parts)
    const filterTerm = useAppSelector((state) => state.filter.filterTerm)

    let filteredArray = [...parts]

    filteredArray.sort((a, b) => (a.id > b.id ? 1 : -1))

    console.log(filterTerm)

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
                            return a.price > b.price ? 1 : -1
                        case 'sort by price: high to low':
                            return a.price < b.price ? 1 : -1
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
