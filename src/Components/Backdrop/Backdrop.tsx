import React, { FC } from 'react'
import { motion } from 'framer-motion'
import './Backdrop.scss'

interface BackdropProps {
    children: React.ReactChild | React.ReactNode
    ClosePopUp: Function
}

const Backdrop: FC<BackdropProps> = ({ children, ClosePopUp }) => {
    return (
        <motion.div
            className="backdrop"
            onClick={() => ClosePopUp()}
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
