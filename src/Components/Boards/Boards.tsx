import React, { FC } from 'react'
import './Boards.scss'

interface BoardsProps {
    boardName: string
    title: string
}

const Boards: FC<BoardsProps> = ({ boardName, title }) => {
    const boardsImgClassName: Function = (boardName: string) => {
        switch (boardName) {
            case 'contact':
                return 'boards-img contact-board'
            case 'about':
                return 'boards-img about-board'

            default:
                return 'boards-img'
        }
    }

    return (
        <div className="boards">
            <h2 className="boards-title">{title}</h2>
            <div className={boardsImgClassName(boardName)}></div>
        </div>
    )
}

export default Boards
