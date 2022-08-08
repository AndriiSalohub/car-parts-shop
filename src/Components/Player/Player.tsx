import React, { FC } from 'react'
import ReactPlayer from 'react-player'
import { setPopUpClose } from '../../Features/PopUp/popUpSlice'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import './Player.scss'

const Player: FC = () => {
    const dispatch: Function = useAppDispatch()
    const popUpOpen: Boolean = useAppSelector((state) => state.popUp.isOpen)

    console.log(popUpOpen)

    return (
        <div
            className="player"
            style={{
                display: popUpOpen ? 'block' : 'none',
            }}
        >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=z0jjTU-H43M&ab_channel=MuffinGroup"
                width="800px"
                height="500px"
            />
            <button
                className="player-close-btn"
                onClick={() => dispatch(setPopUpClose())}
            >
                x
            </button>
        </div>
    )
}

export default Player
