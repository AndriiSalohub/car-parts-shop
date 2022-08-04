import React, { FC } from 'react'
import Advantages from '../../Components/Advantages/Advantages'
import LatestProducts from '../../Components/LatestProducts/LatestProducts'
import SalesProducts from '../../Components/SalesProducts/SalesProducts'

const Main: FC = () => {
    return (
        <main>
            <Advantages />
            <LatestProducts />
            <SalesProducts />
        </main>
    )
}

export default Main
