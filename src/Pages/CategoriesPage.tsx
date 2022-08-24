import React, { FC } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Subheader from '../Components/Subheader/Subheader'
import AnimatedPage from './AnimatedPage'

const CategoriesPage: FC = () => {
    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="categories" />
            <Footer />
        </AnimatedPage>
    )
}

export default CategoriesPage
