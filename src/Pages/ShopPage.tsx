import React, { FC } from 'react'
import { useAppSelector } from '../Hooks/hooks'
import FilterPanel from '../Components/FilterPanel/FilterPanel'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import PartsOutput from '../Components/PartsOutput/PartsOutput'
import Subheader from '../Components/Subheader/Subheader'
import AnimatedPage from './AnimatedPage'

const ShopPage: FC = () => {
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

    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="our products" />
            <main>
                <FilterPanel />
                <PartsOutput array={parts} />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default ShopPage
