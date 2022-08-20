import React, { FC } from 'react'
import ContactBoard from '../Components/ContactBoard/ContactBoard'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import OurContacts from '../Components/OurContacts/OurContacts'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const ContactPage: FC = () => {
    return (
        <>
            <header>
                <NavBar />
                <ContactBoard />
            </header>

            <main>
                <UsefulInformation />
            </main>

            <Footer />
        </>
    )
}

export default ContactPage
