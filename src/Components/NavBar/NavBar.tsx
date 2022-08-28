import React, { useState, FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import Drawer from 'react-modern-drawer'
import { useTransform, motion, useViewportScroll } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { editSearchTerm } from '../../ReduxToolkit/Slices/SearchSlice/SearchSlice'
import { doc, setDoc } from '@firebase/firestore'
import db from '../../firebase'
import './NavBar.scss'
import 'react-modern-drawer/dist/index.css'

const NavBar: FC = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector((state) => state.search)

    const [isOpen, setOpen] = useState<boolean>(false)
    const [activePanel, setActivePanel] = useState<boolean>(true)
    const [isSearchInputOpen, setSearchInputOpen] = useState<boolean>(false)
    let navigate = useNavigate()

    const { scrollY } = useViewportScroll()
    const offsetY: number[] = [0, 300]

    const heightSize: number[] = [120, 100]

    const height = useTransform(scrollY, offsetY, heightSize)

    const toggleDrawer = (): void => {
        setOpen((prevState: boolean) => !prevState)
    }

    const changePanelOnClose = (): void => {
        setTimeout(() => setActivePanel(true), 500)
    }

    const handleSearchChange = async (e: any, id: string) => {
        const docRef = doc(db, 'search', id)
        const payload = { searchTerm: e.target.value }
        await setDoc(docRef, payload)
        dispatch(editSearchTerm(e.target.value))
    }

    const routeChange = (e: any) => {
        if (e.key === 'Enter') {
            navigate('/search')
        }
    }

    return (
        <>
            <motion.header className="menu" style={{ height }}>
                <Link to="/">
                    <img
                        src="https://i.ibb.co/tKmdYGt/logo.png"
                        alt="logo"
                        className="menu-logo"
                    />
                </Link>
                <div className="menu-hamburger">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color="#fff"
                        distance="sm"
                        size={25}
                    />
                </div>
                <nav className="menu-laptop-nav-bar">
                    <ul className="menu-laptop-nav-bar-list">
                        <li className="menu-laptop-nav-bar-list-item">
                            <NavLink
                                to="/"
                                style={(navData) => ({
                                    color: navData.isActive
                                        ? '#ff5f1c'
                                        : 'white',
                                })}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="menu-laptop-nav-bar-list-item">
                            <NavLink
                                to="/about"
                                style={(navData) => ({
                                    color: navData.isActive
                                        ? '#ff5f1c'
                                        : 'white',
                                })}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="menu-laptop-nav-bar-list-item">
                            <NavLink
                                to="/categories"
                                style={(navData) => ({
                                    color: navData.isActive
                                        ? '#ff5f1c'
                                        : 'white',
                                })}
                            >
                                CATEGORIES
                            </NavLink>
                        </li>
                        <li className="menu-laptop-nav-bar-list-item">
                            <NavLink
                                to="/shop"
                                style={(navData) => ({
                                    color: navData.isActive
                                        ? '#ff5f1c'
                                        : 'white',
                                })}
                            >
                                SHOP
                            </NavLink>
                        </li>
                        <li className="menu-laptop-nav-bar-list-item">
                            <NavLink
                                to="/contact"
                                style={(navData) => ({
                                    color: navData.isActive
                                        ? '#ff5f1c'
                                        : 'white',
                                })}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="menu-laptop-nav-bar-list-item buy-now">
                            <a
                                href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?ref=muffingroup&irgwc=1&clickid=VKtTUmX0MxyIWlszN%3A0wnXCVUkD2Wx3T22cJU00&iradid=275988&irpid=1289117&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius"
                                target="_blank"
                                rel="noreferrer"
                            >
                                BUY NOW
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="menu-support-panel">
                    <div className="menu-support-panel-bag"></div>
                    <img
                        src="https://i.ibb.co/NjR8Pwd/shopping-bag-3.png"
                        alt=""
                        className="menu-support-panel-bag drawer-icons support-panele-icons"
                    />
                    <span className="menu-support-panel-bag-counter">0</span>
                    <img
                        src="https://i.ibb.co/9cV89L1/search-2.png"
                        alt=""
                        className="menu-support-panel-search drawer-icons support-panele-icons"
                        onClick={() =>
                            setSearchInputOpen((prevState) => !prevState)
                        }
                    />
                    <button className="menu-support-panel-ask-btn ask-btn">
                        ASK &#62;
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Enter your search"
                    className={
                        isSearchInputOpen
                            ? 'menu-search-input active-input'
                            : 'menu-search-input'
                    }
                    onKeyDown={(e) => routeChange(e)}
                    onChange={(e) => handleSearchChange(e, search.id)}
                />
                <img
                    src="https://i.ibb.co/3fQdSYr/cancel.png"
                    alt="close"
                    className={
                        isSearchInputOpen
                            ? 'menu-search-input-close active-input'
                            : 'menu-search-input-close'
                    }
                    onClick={() =>
                        setSearchInputOpen((prevState) => !prevState)
                    }
                />
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    style={{
                        backgroundColor: '#111111',
                    }}
                    className="menu-drawer"
                >
                    <div
                        className="menu-drawer-hamburger"
                        onClick={() => changePanelOnClose()}
                    >
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#808080"
                            distance="sm"
                            size={25}
                        />
                    </div>
                    <button className="menu-drawer-ask-btn ask-btn">
                        ASK &#62;
                    </button>
                    <div className="menu-drawer-icons">
                        <NavLink to="cart">
                            <img
                                src="https://i.ibb.co/NjR8Pwd/shopping-bag-3.png"
                                alt=""
                                className="menu-drawer-icons-bag drawer-icons"
                            />
                        </NavLink>
                        <span className="menu-drawer-icons-bag-counter">
                            20
                        </span>
                        <img
                            src="https://i.ibb.co/9cV89L1/search-2.png"
                            alt=""
                            className="menu-drawer-icons-loop drawer-icons"
                            onClick={() => setActivePanel(false)}
                        />
                    </div>
                    <form
                        className={
                            activePanel
                                ? 'menu-drawer-search'
                                : 'menu-drawer-search active-panel'
                        }
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your search"
                            className="menu-drawer-search-input"
                            onChange={(e) => handleSearchChange(e, search.id)}
                            onKeyDown={(e) => routeChange(e)}
                        />
                        <button
                            type="submit"
                            className="menu-drawer-search-btn"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/search')
                            }}
                        >
                            <img
                                src="https://i.ibb.co/MZZ3gCC/search-Icon.png"
                                alt="search"
                            />
                        </button>
                    </form>
                    <nav
                        className={
                            activePanel
                                ? 'menu-drawer-nav-bar active-panel'
                                : 'menu-drawer-nav-bar'
                        }
                    >
                        <ul className="menu-drawer-nav-bar-list">
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/about"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/categories"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    CATEGORIES
                                </NavLink>
                            </li>
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/shop"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    SHOP
                                </NavLink>
                            </li>
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/contact"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li className="menu-drawer-nav-bar-list-item">
                                <NavLink
                                    to="/but-now"
                                    style={(navData) => ({
                                        color: navData.isActive
                                            ? 'white'
                                            : '#a6a6a6',
                                    })}
                                >
                                    BUY NOW
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Drawer>
            </motion.header>
        </>
    )
}

export default NavBar
