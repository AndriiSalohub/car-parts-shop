import React, { FC, useEffect, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { doc, setDoc } from '@firebase/firestore'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { getFilterTerm } from '../../ReduxToolkit/Slices/FilterSlice/FilterSlice'
import {
    editSearchTerm,
    getSearchTerm,
} from '../../ReduxToolkit/Slices/SearchSlice/SearchSlice'
import { getParts } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import { AnimatePresence } from 'framer-motion'
import db from '../../firebase'
import AboutPage from '../../Pages/AboutPage'
import ContactPage from '../../Pages/ContactPage'
import HomePage from '../../Pages/HomePage'
import CategoriesPage from '../../Pages/CategoriesPage'
import ShopPage from '../../Pages/ShopPage'
import SearchPage from '../../Pages/SearchPage'
import FilteredCategoriesPage from '../../Pages/FilteredCategoriesPage'
import CartPage from '../../Pages/CartPage'
import { getTotal } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'

const App: FC = () => {
    const dispatch: Function = useAppDispatch()

    const search = useAppSelector((state) => state.search)

    const location = useLocation()

    useEffect(() => {
        dispatch(getParts())
        dispatch(getFilterTerm())
        dispatch(getSearchTerm())
        dispatch(getTotal())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (location.pathname === '/search') {
            dispatch(getSearchTerm())
        } else {
            const docRef = doc(db, 'search', search.id || 'fsaf')
            const payload = { searchTerm: 'random id' }
            setDoc(docRef, payload)
            dispatch(editSearchTerm(' '))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route
                        path="/categories/:currentCategory"
                        element={<FilteredCategoriesPage />}
                    />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
