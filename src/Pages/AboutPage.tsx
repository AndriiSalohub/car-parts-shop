import React, { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useAppSelector } from '../Hooks/hooks'
import Boards from '../Components/Boards/Boards'
import Faq from '../Components/Faq/Faq'
import HowWeWork from '../Components/HowWeWork/HowWeWork'
import Stats from '../Components/Stats/Stats'
import Player from '../Components/Player/Player'
import Backdrop from '../Components/Backdrop/Backdrop'
import OurContacts from '../Components/OurContacts/OurContacts'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const AboutPage: FC = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [playerWidth, setPlayerWidth] = useState<number>(0)
    const [playerHeight, setPlayerHeight] = useState<number>(0)
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    useEffect(() => {
        switch (getWindowSize().innerWidth) {
            case 320: {
                setPlayerHeight(getWindowSize().innerWidth * 0.6)
                setPlayerWidth(getWindowSize().innerWidth * 0.9)
                break
            }
            case 375: {
                setPlayerHeight(getWindowSize().innerWidth * 0.6)
                setPlayerWidth(getWindowSize().innerWidth * 0.9)
                break
            }
            case 425: {
                setPlayerHeight(getWindowSize().innerWidth * 0.6)
                setPlayerWidth(getWindowSize().innerWidth * 0.9)
                break
            }
            case 768: {
                setPlayerHeight(getWindowSize().innerWidth * 0.6)
                setPlayerWidth(getWindowSize().innerWidth * 0.9)
                break
            }
            case 1024: {
                setPlayerHeight(500)
                setPlayerWidth(800)
                break
            }
            default:
                setPlayerHeight(500)
                setPlayerWidth(800)
        }
    }, [windowSize])

    const faqOpen: Boolean = useAppSelector((state) => state.faq.isOpen)
    faqOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')

    return (
        <>
            <Boards title="about our shop" boardName="about" />
            <main>
                <HowWeWork />
                <Stats />
                <Faq children={<OurContacts />} />
                {faqOpen ? (
                    <Backdrop
                        children={
                            <Player
                                player={
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=z0jjTU-H43M&feature=emb_title&ab_channel=MuffinGroup"
                                        width={playerWidth}
                                        height={playerHeight}
                                    />
                                }
                                videoType="faq"
                            />
                        }
                        videoType="faq"
                    />
                ) : null}
                <UsefulInformation />
            </main>
        </>
    )
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
}

export default AboutPage
