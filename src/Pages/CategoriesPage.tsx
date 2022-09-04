import React, { FC } from 'react'
import Categories from '../Components/Categories/Categories'
import OurContacts from '../Components/OurContacts/OurContacts'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const CategoriesPage: FC = () => {
    return (
        <>
            <Subheader pageTitle="categories" />
            <main>
                <Categories children={<OurContacts />} />
                <UsefulInformation />
            </main>
        </>
    )
}

export default CategoriesPage
