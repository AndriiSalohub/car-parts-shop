import React, { FC } from 'react'
import { aboutBoard } from '../../Assets/Images/images'
import './AboutBoard.scss'

const AboutBoard: FC = () => {
    return (
        <div className="about-board">
            <h2 className="about-board-title">about our shop</h2>
            <div className="about-board-img"></div>
        </div>
    )
}

export default AboutBoard
