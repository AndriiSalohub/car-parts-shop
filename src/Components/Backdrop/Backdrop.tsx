import React, { FC } from 'react'
import { motion } from 'framer-motion'
import './Backdrop.scss'
import { useAppDispatch } from '../../Hooks/hooks'
import { setPopUpClose } from '../../Features/PopUp/popUpSlice'

interface BackdropProps {
    children: React.ReactChild | React.ReactNode
}

const Backdrop: FC<BackdropProps> = ({ children }) => {
    const dispatch = useAppDispatch()

    return (
        <motion.div
            className="backdrop"
            onClick={() => dispatch(setPopUpClose())}
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
