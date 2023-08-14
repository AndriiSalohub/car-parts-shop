import { FC } from 'react'
import FilterPanel from '../Components/FilterPanel/FilterPanel'
import PartsOutput from '../Components/PartsOutput/PartsOutput'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import { useAppSelector } from '../Hooks/hooks'

const ShopPage: FC = () => {
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
        docId: string
        amount: number
    }> = useAppSelector((state) => state.parts.parts)

    return (
        <>
            <Subheader pageTitle="our products" />
            <main>
                <FilterPanel />
                <PartsOutput array={parts} />
                <UsefulInformation />
            </main>
        </>
    )
}

export default ShopPage
