import { doc, setDoc } from '@firebase/firestore'
import { AnimatePresence } from 'framer-motion'
import { FC, useEffect, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import AboutPage from '../../Pages/AboutPage'
import CartPage from '../../Pages/CartPage'
import CategoriesPage from '../../Pages/CategoriesPage'
import ContactPage from '../../Pages/ContactPage'
import FilteredCategoriesPage from '../../Pages/FilteredCategoriesPage'
import HomePage from '../../Pages/HomePage'
import ProductPage from '../../Pages/ProductPage'
import SearchPage from '../../Pages/SearchPage'
import ShopPage from '../../Pages/ShopPage'
import { getCurrentPageId } from '../../ReduxToolkit/Slices/CurrentPageId/CurrentPageId'
import { getFilterTerm } from '../../ReduxToolkit/Slices/FilterSlice/FilterSlice'
import { getParts } from '../../ReduxToolkit/Slices/PartsSlice/PartsSlice'
import {
    editSearchTerm,
    getSearchTerm,
} from '../../ReduxToolkit/Slices/SearchSlice/SearchSlice'
import { getTotal } from '../../ReduxToolkit/Slices/TotalSlice/TotalSlice'
import db from '../../firebase'

const App: FC = () => {
    const dispatch: Function = useAppDispatch()

    const search = useAppSelector((state) => state.search)

    const location = useLocation()

    useEffect(() => {
        dispatch(getParts())
        dispatch(getFilterTerm())
        dispatch(getSearchTerm())
        dispatch(getTotal())
        dispatch(getCurrentPageId())
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
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="categories" element={<CategoriesPage />} />
                        <Route
                            path="categories/:currentCategory"
                            element={<FilteredCategoriesPage />}
                        />
                        <Route path="shop" element={<ShopPage />} />
                        <Route
                            path="shop/:productCode"
                            element={<ProductPage />}
                        />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="search" element={<SearchPage />} />
                        <Route path="cart" element={<CartPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
