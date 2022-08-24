import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface AnimatedPageProps {
    children: React.ReactChild | React.ReactNode
}

const AnimatedPage: FC<AnimatedPageProps> = ({ children }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.3,
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage
