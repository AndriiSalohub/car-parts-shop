import React, { FC } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import ProductsSection from '../ProductsSection/ProductsSection'
import { PartsItemProps } from '../../Types/PartsProps'
import './SalesProducts.scss'

const SalesProducts: FC = () => {
    const allProducts = useAppSelector((state) => state.parts.parts)

    const salesProducts: Array<PartsItemProps> = []

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
