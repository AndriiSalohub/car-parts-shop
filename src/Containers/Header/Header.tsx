import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import Welcome from '../../Components/Welcome/Welcome'

import './Header.scss'

const Header = () => {
    return (
        <>
            <header className="header">
                <NavBar />
                <Welcome />
            </header>
        </>
    )
}

export default Header
