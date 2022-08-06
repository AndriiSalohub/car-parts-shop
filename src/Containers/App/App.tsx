import React, { FC, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getParts } from '../../Features/Parts/parts'
import { useAppDispatch } from '../../Hooks/hooks'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getParts())
    })

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Main />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
