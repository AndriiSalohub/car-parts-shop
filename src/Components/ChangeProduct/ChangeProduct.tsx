import React, { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { doc, setDoc } from '@firebase/firestore'
import {
    decreaseCurrentPageId,
    increaseCurrentPageId,
} from '../../ReduxToolkit/Slices/CurrentPageId/CurrentPageId'
import db from '../../firebase'
import './ChangeProduct.scss'

const ChangeProduct: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const parts: Array<{
        id: string
        productCode: string
    }> = useAppSelector((state) => state.parts.parts)
    const currentPageId = useAppSelector((state) => state.currentPageId)

    const decreaseCurrentPage = async () => {
        const docRef = doc(db, 'currentPageId', currentPageId.id)
        const payload = { currentPageId: currentPageId.currentPageId - 1 }
        await setDoc(docRef, payload)
        dispatch(decreaseCurrentPageId())
    }

    const increaseCurrentPage = async () => {
        const docRef = doc(db, 'currentPageId', currentPageId.id)
        const payload = { currentPageId: currentPageId.currentPageId + 1 }
        await setDoc(docRef, payload)
        dispatch(increaseCurrentPageId())
    }

    return (
        <div className="change-product">
            <img
                src="https://i.ibb.co/3RJW8cH/left-arrow.png"
                alt="left"
                className="change-product-left"
                onClick={() => {
                    navigate(
                        `/shop/${
                            parts.find(
                                (part) =>
                                    +part.id ===
                                    +currentPageId.currentPageId - 1
                            )?.productCode
                        }`
                    )
                    decreaseCurrentPage()
                }}
            />
            <NavLink to="/shop">
                <img
                    src="https://i.ibb.co/d5vB7zb/four-squares-button-of-view-options.png"
                    alt="home"
                    className="change-product-home"
                />
            </NavLink>
            <img
                src="https://i.ibb.co/0KvmrFF/right-arrow.png"
                alt="right"
                className="change-product-right"
                onClick={() => {
                    navigate(
                        `/shop/${
                            parts.find(
                                (part) =>
                                    +part.id ===
                                    +currentPageId.currentPageId + 1
                            )?.productCode
                        }`
                    )
                    increaseCurrentPage()
                }}
            />
        </div>
    )
}

export default ChangeProduct
