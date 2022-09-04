import React, { FC } from 'react'
import Boards from '../Components/Boards/Boards'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import OurContacts from '../Components/OurContacts/OurContacts'
import Questions from '../Components/Questions/Questions'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const ContactPage: FC = () => {
    return (
        <>
            <Boards title="contact with us" boardName="contact" />
            <main>
                <Questions children={<OurContacts />} />
                <UsefulInformation />
            </main>
        </>
    )
}

export default ContactPage
