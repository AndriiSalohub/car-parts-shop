import React, { FC, useEffect, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../Hooks/hooks'
import { getParts } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { AnimatePresence } from 'framer-motion'
import AboutPage from '../../Pages/AboutPage'
import ContactPage from '../../Pages/ContactPage'
import HomePage from '../../Pages/HomePage'
import CategoriesPage from '../../Pages/CategoriesPage'
import ShopPage from '../../Pages/ShopPage'
import { getFilterTerm } from '../../ReduxToolkit/Slices/FilterSlice/FilterSlice'
import SearchPage from '../../Pages/SearchPage'
import { getSearchTerm } from '../../ReduxToolkit/Slices/SearchSlice/SearchSlice'

const App: FC = () => {
    const dispatch: Function = useAppDispatch()

    useEffect(() => {
        dispatch(getParts())
        dispatch(getFilterTerm())
        dispatch(getSearchTerm())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

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
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
