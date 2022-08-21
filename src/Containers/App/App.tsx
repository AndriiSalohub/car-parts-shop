import React, { FC, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from '../../Hooks/hooks'
import { getParts } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import AboutPage from '../../Pages/AboutPage'
import ContactPage from '../../Pages/ContactPage'
import HomePage from '../../Pages/HomePage'
import CategoriesPage from '../../Pages/CategoriesPage'
import ShopPage from '../../Pages/ShopPage'

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
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App
