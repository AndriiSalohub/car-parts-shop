import React from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import ProductsSection from '../ProductsSection/ProductsSection'
import './LatestProducts.scss'

const LatestProducts = () => {
    const latestProducts = useAppSelector((state) => state.parts.parts)

    return (
        <section className="latest-products">
            <ProductsSection
                sectionTitle="latest products"
                products={latestProducts.slice(-4)}
            />
        </section>
    )
}

export default LatestProducts
