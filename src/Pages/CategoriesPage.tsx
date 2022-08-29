import React, { FC } from 'react'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import OurContacts from '../Components/OurContacts/OurContacts'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import AnimatedPage from './AnimatedPage'

const CategoriesPage: FC = () => {
    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="categories" />
            <main>
                <Categories children={<OurContacts />} />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default CategoriesPage
