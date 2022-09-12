import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import ProductsSection from '../ProductsSection/ProductsSection'
import './SalesProducts.scss'

const SalesProducts: FC = () => {
    const allProducts = useAppSelector((state) => state.parts.parts)

    const salesProducts: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
        docId: string
    }> = []

    allProducts.forEach(({ discount }, index) => {
        if (discount === true) {
            salesProducts.push(allProducts[index])
        }
    })

    return (
        <div className="sales-products">
            <ProductsSection
                sectionTitle="sales products"
                products={salesProducts.slice(0, 4)}
            />
        </div>
    )
}

export default SalesProducts
