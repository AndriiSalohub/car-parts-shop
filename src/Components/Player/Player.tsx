import React, { FC } from 'react'
import ReactPlayer from 'react-player'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { setPopupClose } from '../../ReduxToolkit/Slices/PopupSlice/PopupSlice'
import './Player.scss'

const Player: FC = () => {
    const dispatch: Function = useAppDispatch()
    const popupOpen: Boolean = useAppSelector((state) => state.popup.isOpen)

    return (
        <div
            className="player"
            style={{
                display: popupOpen ? 'block' : 'none',
            }}
        >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=z0jjTU-H43M&ab_channel=MuffinGroup"
                width="800px"
                height="500px"
            />
            <button
                className="player-close-btn"
                onClick={() => dispatch(setPopupClose())}
            >
                x
            </button>
        </div>
    )
}

export default Player
