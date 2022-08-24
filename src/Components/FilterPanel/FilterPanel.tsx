import React, { FC, useState } from 'react'
import { useAppSelector } from '../../Hooks/hooks'
import './FilterPanel.scss'

const FilterPanel: FC = () => {
    const parts = useAppSelector((state) => state.parts.parts)

    const [selectType, setSelectType] = useState('')

    return (
        <section className="filter-panel">
            <div className="filter-panel-background">
                <p className="filter-panel-result">
                    Showing all {Object.keys(parts).length} result
                </p>
                <select className="filter-panel-select">
                    <option value="default sorting">Default sorting</option>
                    <option value="sorting by popularity">
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
