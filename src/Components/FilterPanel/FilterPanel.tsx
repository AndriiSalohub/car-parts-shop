import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { setFilterTerm } from '../../ReduxToolkit/Slices/FilterSlice/FilterSlice'
import './FilterPanel.scss'

const FilterPanel: FC = () => {
    const dispatch = useAppDispatch()

    const parts = useAppSelector((state) => state.parts.parts)

    return (
        <section className="filter-panel">
            <div className="filter-panel-background">
                <p className="filter-panel-result">
                    Showing all {Object.keys(parts).length} result
                </p>
                <select
                    className="filter-panel-select"
                    onChange={(e) => dispatch(setFilterTerm(e.target.value))}
                >
                    <option value="default sorting">Default sorting</option>
                    <option value="sort by popularity">
                        Sort by popularity
                    </option>
                    <option value="sort by average rating">
                        Sort by average rating
                    </option>
                    <option value="sort by latest">Sort by latest</option>
                    <option value="sort by price: low to high">
                        Sort by price: low to high
                    </option>
                    <option value="sort by price: high to low">
                        Sort by price: high to low
                    </option>
                </select>
            </div>
        </section>
    )
}

export default FilterPanel
