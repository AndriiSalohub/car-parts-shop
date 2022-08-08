import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import ProductsSection from '../ProductsSection/ProductsSection'
import './LatestProducts.scss'

const LatestProducts: FC = () => {
    const allProducts: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
    }> = useAppSelector((state) => state.parts.parts)

    const latestProducts: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
    }> = []

    for (let i = 0; i < allProducts.length - 1; i++) {
        for (let j = 1; j <= 4; j++) {
            if (allProducts[i].id === allProducts.length - j) {
                latestProducts.push(allProducts[i])
            }
        }
    }

    return (
        <section className="latest-products">
            <ProductsSection
                sectionTitle="latest products"
                products={latestProducts}
            />
        </section>
    )
}

export default LatestProducts
