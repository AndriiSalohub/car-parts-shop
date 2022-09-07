import React from 'react'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const ProductPage = () => {
    return (
        <>
            <Subheader pageTitle="our products" />
            <main>
                <UsefulInformation />
            </main>
        </>
    )
}

export default ProductPage
