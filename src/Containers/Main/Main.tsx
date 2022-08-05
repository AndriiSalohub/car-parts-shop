import React, { FC } from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Advantages from '../../Components/Advantages/Advantages'
import LatestProducts from '../../Components/LatestProducts/LatestProducts'
import SalesProducts from '../../Components/SalesProducts/SalesProducts'

const Main: FC = () => {
    return (
        <main>
            <Advantages />
            <LatestProducts />
            <SalesProducts />
            <AboutUs />
        </main>
    )
}

export default Main
