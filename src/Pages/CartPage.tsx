import React, { FC } from 'react'
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import AnimatedPage from './AnimatedPage'

const CartPage: FC = () => {
    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="Cart" />
            <main>
                <Cart />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default CartPage
