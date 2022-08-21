import React, { FC } from 'react'
import './Subheader.scss'

interface SubheaderProps {
    pageTitle: string
}

const Subheader: FC<SubheaderProps> = ({ pageTitle }) => {
    return (
        <div className="subheader">
            <h2 className="subheader-title">{pageTitle}</h2>
        </div>
    )
}

export default Subheader
