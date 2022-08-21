import React, { FC } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Subheader from '../Components/Subheader/Subheader'

const CategoriesPage: FC = () => {
    return (
        <>
            <NavBar />
            <Subheader pageTitle="categories" />
            <Footer />
        </>
    )
}

export default CategoriesPage
