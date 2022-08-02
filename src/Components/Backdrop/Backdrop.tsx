import React from 'react'
import { motion } from 'framer-motion'
import './Backdrop.scss'

interface BackdropProps {
    children: React.ReactChild | React.ReactNode
    ClosePopUp: Function
    popUpOpen: Boolean
}

const Backdrop = ({ children, ClosePopUp, popUpOpen }: BackdropProps) => {
    return (
        <motion.div
            className="backdrop"
            onClick={() => ClosePopUp()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop
