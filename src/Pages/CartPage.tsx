import React, { FC } from 'react'
import Cart from '../Components/Cart/Cart'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const CartPage: FC = () => {
    return (
        <>
            <Subheader pageTitle="Cart" />
            <main>
                <Cart />
                <UsefulInformation />
            </main>
        </>
    )
}

export default CartPage
