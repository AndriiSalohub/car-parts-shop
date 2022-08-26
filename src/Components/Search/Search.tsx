import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import './Search.scss'

interface SearchItemProps {
    id: number
    title: string
    price: number
    discount: boolean
    discountPrice: number
    productCode: string
    image: string
    manufacturer: string
}

const Search: FC = () => {
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
    const serachTerm = useAppSelector((state) => state.search.searchTerm)
    return (
        <section className="search">
            {parts
                .filter(
                    (part) =>
                        part.title
                            .toLowerCase()
                            .indexOf(serachTerm?.toLowerCase()) > -1
                )
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
                    }) => {
                        return (
                            <SearchItem
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
                    }
                )}
        </section>
    )
}

const SearchItem: FC<SearchItemProps> = ({
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
        <div className="search-item">
            <h2 className="search-item-title">{title}</h2>
            <p className="search-item-product-code search-item-information">
                ProductCode: {productCode}
            </p>
            <p className="search-item-manufacturer search-item-information">
                Manufacturer: {manufacturer}
            </p>
            <p className="search-item-footer">
                <div className="search-item-footer-left-side"></div>
                <div className="search-item-footer-read-more">
                    <img
                        src="https://i.ibb.co/7RRSpYp/files.png"
                        alt="read-more"
                    />{' '}
                    <p>Read More</p>
                </div>
            </p>
        </div>
    )
}

export default Search
