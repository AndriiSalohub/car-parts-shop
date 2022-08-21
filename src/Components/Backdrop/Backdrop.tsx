import React, { FC } from 'react'
import { motion } from 'framer-motion'
import './Backdrop.scss'
import { useAppDispatch } from '../../Hooks/hooks'
import { setPopupClose } from '../../ReduxToolkit/Slices/PopupSlice/PopupSlice'

interface BackdropProps {
    children: React.ReactChild | React.ReactNode
}

const Backdrop: FC<BackdropProps> = ({ children }) => {
    const dispatch: Function = useAppDispatch()

    return (
        <motion.div
            className="backdrop"
            onClick={() => dispatch(setPopupClose())}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop
