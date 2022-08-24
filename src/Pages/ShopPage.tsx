import React, { FC } from 'react'
import FilterPanel from '../Components/FilterPanel/FilterPanel'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import PartsOutput from '../Components/PartsOutput/PartsOutput'
import Subheader from '../Components/Subheader/Subheader'
import AnimatedPage from './AnimatedPage'

const ShopPage: FC = () => {
    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="our products" />
            <main>
                <FilterPanel />
                <PartsOutput />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default ShopPage
