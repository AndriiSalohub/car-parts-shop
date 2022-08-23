import React, { FC } from 'react'
import { motion } from 'framer-motion'
import './Backdrop.scss'
import { useAppDispatch } from '../../Hooks/hooks'
import { setFaqVideoClose } from '../../ReduxToolkit/Slices/FaqSlice/FaqSlice'
import { setPopupClose } from '../../ReduxToolkit/Slices/PopupSlice/PopupSlice'

interface BackdropProps {
    children: React.ReactChild | React.ReactNode
    videoType: string
}

const Backdrop: FC<BackdropProps> = ({ children, videoType }) => {
    const dispatch: Function = useAppDispatch()

    const handleClose = (videoType: string) => {
        switch (videoType) {
            case 'popup': {
                dispatch(setPopupClose())
                break
            }
            case 'faq': {
                dispatch(setFaqVideoClose())
                break
            }

            default:
                return null
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={() => handleClose(videoType)}
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
