import React, { FC, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../Hooks/hooks'
import { getParts } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { AnimatePresence } from 'framer-motion'
import AboutPage from '../../Pages/AboutPage'
import ContactPage from '../../Pages/ContactPage'
import HomePage from '../../Pages/HomePage'
import CategoriesPage from '../../Pages/CategoriesPage'
import ShopPage from '../../Pages/ShopPage'

const App: FC = () => {
    const dispatch: Function = useAppDispatch()

    useEffect(() => {
        dispatch(getParts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const location = useLocation()

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
