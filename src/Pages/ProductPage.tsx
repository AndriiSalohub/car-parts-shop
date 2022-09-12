import React from 'react'
import ChangeProduct from '../Components/ChangeProduct/ChangeProduct'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const ProductPage = () => {
    return (
        <>
            <Subheader pageTitle="our products" />
            <main>
                <ChangeProduct />
                <UsefulInformation />
            </main>
        </>
    )
}

export default ProductPage
