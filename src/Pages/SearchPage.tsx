import React, { FC } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Search from '../Components/Search/Search'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import AnimatedPage from './AnimatedPage'

const SearchPage: FC = () => {
    return (
        <AnimatedPage>
            <NavBar />
            <Subheader pageTitle="0 result found" />
            <main>
                <Search />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default SearchPage
