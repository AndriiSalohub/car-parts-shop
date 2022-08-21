import React, { FC } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Subheader from '../Components/Subheader/Subheader'

const ShopPage: FC = () => {
    return (
        <>
            <NavBar />
            <Subheader pageTitle="our products" />
            <Footer />
        </>
    )
}

export default ShopPage
