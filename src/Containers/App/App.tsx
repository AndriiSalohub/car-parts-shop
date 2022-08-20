import React, { FC, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getParts } from '../../Features/Parts/parts'
import { useAppDispatch } from '../../Hooks/hooks'
import AboutPage from '../../Pages/AboutPage'
import ContactPage from '../../Pages/ContactPage'
import HomePage from '../../Pages/HomePage'

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getParts())
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App
