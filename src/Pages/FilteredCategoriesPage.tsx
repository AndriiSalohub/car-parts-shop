import React, { FC } from 'react'
import { useAppSelector } from '../Hooks/hooks'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import PartsOutput from '../Components/PartsOutput/PartsOutput'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import AnimatedPage from './AnimatedPage'
import FilterPanel from '../Components/FilterPanel/FilterPanel'

const FilteredCategoriesPage: FC = () => {
    const parts: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
        popularity: number
        averageRating: number
        categories: any
        docId: string
        amount: number
    }> = useAppSelector((state) => state.parts.parts)

    const { currentCategory } = useParams()

    return (
        <AnimatedPage>
            <NavBar />
            <Subheader
                pageTitle={
                    currentCategory
                        ? currentCategory[0].toUpperCase() +
                          currentCategory.slice(1)
                        : ''
                }
            />
            <main>
                <FilterPanel />
                <PartsOutput
                    array={parts.filter((item) =>
                        item.categories.some(
                            (category: string) => category === currentCategory
                        )
                    )}
                />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default FilteredCategoriesPage
