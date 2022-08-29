import React, { FC } from 'react'
import { useAppSelector } from '../Hooks/hooks'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Search from '../Components/Search/Search'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'
import AnimatedPage from './AnimatedPage'

const SearchPage: FC = () => {
    const parts: Array<{
        title: string
    }> = useAppSelector((state) => state.parts.parts)
    const searchTerm = useAppSelector((state) => state.search.searchTerm)

    return (
        <AnimatedPage>
            <NavBar />
            <Subheader
                pageTitle={`${
                    searchTerm.trim() !== ''
                        ? Object(
                              parts.filter(
                                  (part) =>
                                      part.title
                                          .toLowerCase()
                                          .indexOf(searchTerm?.toLowerCase()) >
                                      -1
                              )
                          ).length
                        : 0
                } results found for: ${
                    searchTerm === 'random id' ? '' : searchTerm
                }`}
            />
            <main>
                <Search />
                <UsefulInformation />
            </main>
            <Footer />
        </AnimatedPage>
    )
}

export default SearchPage
