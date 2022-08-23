import React, { FC } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import './Stats.scss'

interface VisibleProps {
    isVisible: boolean
}

const Stats: FC = () => {
    return (
        <section className="stats">
            <h2 className="stats-title">carparts stats</h2>
            <ul className="stats-list">
                <VisibilitySensor>
                    {({ isVisible }: VisibleProps) => (
                        <li className="stats-list-item">
                            <p className="stats-list-item-information">
                                +
                                {isVisible ? (
                                    <CountUp end={1672} duration={2} />
                                ) : (
                                    0
                                )}
                            </p>
                            <h3 className="stats-list-item-title">
                                satisfied customers
                            </h3>
                        </li>
                    )}
                </VisibilitySensor>
                <VisibilitySensor>
                    {({ isVisible }: VisibleProps) => (
                        <li className="stats-list-item">
                            <p className="stats-list-item-information">
                                {isVisible ? (
                                    <CountUp end={3864} duration={2} />
                                ) : (
                                    0
                                )}
                            </p>
                            <h3 className="stats-list-item-title">
                                parts sold
                            </h3>
                        </li>
                    )}
                </VisibilitySensor>
                <VisibilitySensor>
                    {({ isVisible }: VisibleProps) => (
                        <li className="stats-list-item">
                            <p className="stats-list-item-information">
                                {isVisible ? (
                                    <CountUp end={8} duration={2} />
                                ) : (
                                    0
                                )}{' '}
                                years
                            </p>
                            <h3 className="stats-list-item-title">
                                experience
                            </h3>
                        </li>
                    )}
                </VisibilitySensor>
                <VisibilitySensor>
                    {({ isVisible }: VisibleProps) => (
                        <li className="stats-list-item">
                            <p className="stats-list-item-information">
                                +
                                {isVisible ? (
                                    <CountUp end={1128} duration={2} />
                                ) : (
                                    0
                                )}
                            </p>
                            <h3 className="stats-list-item-title">clients</h3>
                        </li>
                    )}
                </VisibilitySensor>
            </ul>
        </section>
    )
}

export default Stats
