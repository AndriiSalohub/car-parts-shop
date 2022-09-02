import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import './Search.scss'

interface SearchItemProps {
    id: number
    title: string
    productCode: string
    manufacturer: string
}

const Search: FC = () => {
    const parts: Array<{
        id: number
        title: string
        productCode: string
        manufacturer: string
    }> = useAppSelector((state) => state.parts.parts)
    const searchTerm: string = useAppSelector(
        (state) => state.search.searchTerm
    )

    return (
        <section className="search">
            {Object(
                parts.filter(
                    (part) =>
                        part.title
                            .toLowerCase()
                            .indexOf(searchTerm?.toLowerCase()) > -1
                )
            ).length !== 0 && searchTerm.trim() !== '' ? (
                parts
                    .filter(
                        (part) =>
                            part.title
                                .toLowerCase()
                                .indexOf(searchTerm?.toLowerCase()) > -1
                    )
                    .map(({ id, title, productCode, manufacturer }) => {
                        return (
                            <SearchItem
                                key={id}
                                id={id}
                                title={title}
                                productCode={productCode}
                                manufacturer={manufacturer}
                            />
                        )
                    })
            ) : (
                <div className="search-errors">
                    <img
                        src="https://i.ibb.co/SKxMcRq/cone.png"
                        alt="cone"
                        className="search-errors-error-img"
                    />
                    <div className="search-errors-error-text">
                        <h2 className="search-errors-error-text-title">
                            Ooops...
                        </h2>
                        <p className="search-errors-error-text-information">
                            No results found for:
                        </p>
                    </div>
                </div>
            )}
        </section>
    )
}

const SearchItem: FC<SearchItemProps> = ({
    title,
    productCode,
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
            <div className="search-item-footer">
                <div className="search-item-footer-left-side"></div>
                <div className="search-item-footer-read-more">
                    <img
                        src="https://i.ibb.co/7RRSpYp/files.png"
                        alt="read-more"
                    />{' '}
                    <p>Read More</p>
                </div>
            </div>
        </div>
    )
}

export default Search
