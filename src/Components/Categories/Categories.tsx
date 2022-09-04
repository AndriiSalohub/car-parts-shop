import React, { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Categories.scss'

interface CategoriesProps {
    children: React.ReactChild | React.ReactNode
}

const Categories: FC<CategoriesProps> = ({ children }) => {
    return (
        <section className="categories">
            <ul className="categories-list">
                <Link to="/categories/body">
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic1-480x307.jpg"
                            alt="body"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Body</h2>
                    </li>
                </Link>
                <NavLink to="/categories/brakes">
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic3-480x307.jpg"
                            alt="brakes"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Brakes</h2>
                    </li>
                </NavLink>
                <NavLink to='/categories/electrics">'>
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic7-480x307.jpg"
                            alt="electrics"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">
                            Electrics
                        </h2>
                    </li>
                </NavLink>
                <NavLink to="/categories/engines">
                    {' '}
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic5-600x384.jpg"
                            alt="engines"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Engines</h2>
                    </li>
                </NavLink>
                <NavLink to="/categories/filters">
                    {' '}
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic4-600x384.jpg"
                            alt="filters"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Filters</h2>
                    </li>
                </NavLink>
                <NavLink to="/categories/lights">
                    {' '}
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic1-480x307.jpg"
                            alt="lights"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Lights</h2>
                    </li>
                </NavLink>
                <NavLink to="/categories/tries">
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic6-480x307.jpg"
                            alt="tries"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Tries</h2>
                    </li>
                </NavLink>
                <NavLink to="/categories/wheels">
                    <li className="categories-list-item">
                        <img
                            src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-category-pic3-480x307.jpg"
                            alt="wheels"
                            className="categories-list-item-img"
                        />
                        <h2 className="categories-list-item-title">Wheels</h2>
                    </li>
                </NavLink>
            </ul>
            {children}
        </section>
    )
}

export default Categories
