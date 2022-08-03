import React, { useState, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Player from '../../Components/Player/Player'
import Welcome from '../../Components/Welcome/Welcome'
import Backdrop from '../../Components/Backdrop/Backdrop'
import NavBar from '../../Components/NavBar/NavBar'
import Advantages from '../../Components/Advantages/Advantages'

const App: FC = () => {
    const [popUpOpen, setPopUpOpen] = useState<boolean>(false)

    const OpenPopUp = (): void => {
        setPopUpOpen(true)
    }

    const ClosePopUp = (): void => {
        setPopUpOpen(false)
    }

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
                            <Welcome OpenPopUp={OpenPopUp} />
                            {popUpOpen ? (
                                <Backdrop
                                    children={
                                        <Player
                                            popUpOpen={popUpOpen}
                                            ClosePopUp={ClosePopUp}
                                        />
                                    }
                                    ClosePopUp={ClosePopUp}
                                />
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
