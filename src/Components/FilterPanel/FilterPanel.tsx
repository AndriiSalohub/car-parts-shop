import React, { FC } from 'react'
import { doc, setDoc } from '@firebase/firestore'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { editFilterTerm } from '../../ReduxToolkit/Slices/FilterSlice/FilterSlice'
import db from '../../firebase'
import './FilterPanel.scss'

const FilterPanel: FC = () => {
    const dispatch: Function = useAppDispatch()

    const parts = useAppSelector((state) => state.parts.parts)
    const filter = useAppSelector((state) => state.filter)

    const handleFilterChange: Function = async (
        e: React.SyntheticEvent,
        id: string
    ) => {
        let target = e.target as HTMLInputElement
        const docRef = doc(db, 'filter', id)
        const payload = { filterterm: target.value }
        await setDoc(docRef, payload)
        dispatch(editFilterTerm(target.value))
    }

    return (
        <section className="filter-panel">
            <div className="filter-panel-background">
                <p className="filter-panel-result">
                    Showing all {Object.keys(parts).length} result
                </p>
                <select
                    className="filter-panel-select"
                    onChange={(e) => handleFilterChange(e, filter.id)}
                >
                    <option
                        value="default sorting"
                        selected={
                            filter.filterTerm === 'default sorting'
                                ? true
                                : false
                        }
                    >
                        Default sorting
                    </option>
                    <option
                        value="sort by popularity"
                        selected={
                            filter.filterTerm === 'sort by popularity'
                                ? true
                                : false
                        }
                    >
                        Sort by popularity
                    </option>
                    <option
                        value="sort by average rating"
                        selected={
                            filter.filterTerm === 'sort by average rating'
                                ? true
                                : false
                        }
                    >
                        Sort by average rating
                    </option>
                    <option
                        value="sort by latest"
                        selected={
                            filter.filterTerm === 'sort by latest'
                                ? true
                                : false
                        }
                    >
                        Sort by latest
                    </option>
                    <option
                        value="sort by price: low to high"
                        selected={
                            filter.filterTerm === 'sort by price: low to high'
                                ? true
                                : false
                        }
                    >
                        Sort by price: low to high
                    </option>
                    <option
                        value="sort by price: high to low"
                        selected={
                            filter.filterTerm === 'sort by price: high to low'
                                ? true
                                : false
                        }
                    >
                        Sort by price: high to low
                    </option>
                </select>
            </div>
        </section>
    )
}

export default FilterPanel
