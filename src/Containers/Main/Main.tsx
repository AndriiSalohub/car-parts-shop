import React, { FC } from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Advantages from '../../Components/Advantages/Advantages'
import LatestProducts from '../../Components/LatestProducts/LatestProducts'
import OurContacts from '../../Components/OurContacts/OurContacts'
import SalesProducts from '../../Components/SalesProducts/SalesProducts'

const Main: FC = () => {
    return (
        <main>
            <Advantages />
            <LatestProducts />
            <SalesProducts />
            <AboutUs>
                {' '}
                <OurContacts />
            </AboutUs>
        </main>
    )
}

export default Main
