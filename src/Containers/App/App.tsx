import React, { useState, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Player from '../../Components/Player/Player'
import Welcome from '../../Components/Welcome/Welcome'
import Backdrop from '../../Components/Backdrop/Backdrop'
import NavBar from '../../Components/NavBar/NavBar'
import Advantages from '../../Components/Advantages/Advantages'
import { useAppSelector } from '../../Hooks/hooks'

const App: FC = () => {
    const popUpOpen = useAppSelector((state) => state.popUp.isOpen)

    popUpOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <Welcome />
                            {popUpOpen ? (
                                <Backdrop children={<Player />} />
                            ) : null}
                            <Advantages />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
