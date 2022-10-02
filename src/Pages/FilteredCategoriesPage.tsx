import React, { FC } from 'react'
import { useAppSelector } from '../Hooks/hooks'
import { useParams } from 'react-router-dom'
import PartsOutput from '../Components/PartsOutput/PartsOutput'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
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
        categories: Array<string>
        docId: string
        amount: number
    }> = useAppSelector((state) => state.parts.parts)

    const { currentCategory } = useParams()

    return (
        <>
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
        </>
    )
}

export default FilteredCategoriesPage
