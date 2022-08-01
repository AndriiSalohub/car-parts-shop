import React from 'react'
import ReactPlayer from 'react-player'
import './Player.scss'

interface PlayerProps {
    popUpOpen: Boolean
    ClosePopUp: Function
}

const Player = ({ popUpOpen, ClosePopUp }: PlayerProps) => {
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
            <button className="player-close-btn" onClick={() => ClosePopUp()}>
                x
            </button>
        </div>
    )
}

export default Player
