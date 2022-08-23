import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { setFaqVideoClose } from '../../ReduxToolkit/Slices/FaqSlice/FaqSlice'
import { setPopupClose } from '../../ReduxToolkit/Slices/PopupSlice/PopupSlice'
import './Player.scss'

interface PlayerProps {
    player: React.ReactChild | React.ReactNode
    videoType: string
}

const Player: FC<PlayerProps> = ({ player, videoType }) => {
    const dispatch: Function = useAppDispatch()

    const popupOpen: Boolean = useAppSelector((state) => state.popup.isOpen)
    const faqOpen: Boolean = useAppSelector((state) => state.faq.isOpen)
    const open = videoType === 'popup' ? popupOpen : faqOpen

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
        <div
            className="player"
            style={{
                display: open ? 'block' : 'none',
            }}
        >
            {player}
            <button
                className="player-close-btn"
                onClick={() => handleClose(videoType)}
            >
                x
            </button>
        </div>
    )
}

export default Player
