import React, { FC } from 'react'
import './HowWeWork.scss'

const HowWeWork: FC = () => {
    return (
        <section className="how-we-work">
            <div className="how-we-work-first-block">
                <div className="how-we-work-first-block-icon">HOW WE WORK</div>
                <h2 className="how-we-work-first-block-title how-we-work-title">
                    Sed ultrices nisl velit ullamcorper quis nibh magna placerat
                </h2>
                <ul className="how-we-work-first-block-list">
                    <li className="how-we-work-first-block-list-item">
                        <img
                            src="https://i.ibb.co/cFtQhDV/search-3.png"
                            alt="loop"
                            className="how-we-work-first-block-list-item-loop-icon"
                        />
                        <p className="how-we-work-first-block-list-item-text">
                            {' '}
                            Mauris rhoncus orci in imperdiet placerat.
                        </p>
                    </li>
                    <li className="how-we-work-list-item">
                        <img
                            src="https://i.ibb.co/cFtQhDV/search-3.png"
                            alt="loop"
                            className="how-we-work-first-block-list-item-loop-icon"
                        />
                        <p className="how-we-work-first-block-list-item-text">
                            Vestibulum euismod nisl suscipit ligula volutpat
                            feugiat
                        </p>
                    </li>
                    <li className="how-we-work-list-item">
                        <img
                            src="https://i.ibb.co/cFtQhDV/search-3.png"
                            alt="loop"
                            className="how-we-work-first-block-list-item-loop-icon"
                        />
                        <p className="how-we-work-first-block-list-item-text">
                            Cras massa nibh, tincidunt ut eros vulputate odio
                        </p>
                    </li>
                </ul>
                <p className="how-we-work-first-block-text how-we-work-text">
                    Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc
                    quis nibh magna. Proin risus erat, fringilla vel purus sit
                    amet, mattis porta enim. Duis fermentum faucibus est, sed
                    vehicula velit sodales vitae. Mauris mollis lobortis turpis,
                    eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem
                    vitae tempus. Curabitur ut tortor a orci fermentum
                    ultricies. Mauris maximus velit commodo, varius ligula vel,
                    consequat est.
                </p>
                <img
                    src="https://themes.muffingroup.com/be/carparts/wp-content/uploads/2020/09/carparts-about-pic1.jpg"
                    alt="our-desk"
                    className="how-we-work-first-block-img how-we-work-img"
                />
            </div>
            <div className="how-we-work-second-block">
                <img
                    src="https://i.ibb.co/gFJhp4f/2022-08-22-162145576.png"
                    alt="preview"
                    className="how-we-work-second-block-img how-we-work-img"
                />
                <h2 className="how-we-work-second-block-title how-we-work-title">
                    Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex
                    sit amet elementum
                </h2>
                <p className="how-we-work-second-block-first-paragraph-text how-we-work-text">
                    Curabitur sed iaculis dolor, non congue ligula. Maecenas
                    imperdiet ante eget hendrerit posuere. Nunc urna libero,
                    congue porta nibh a, semper feugiat sem. Sed auctor dui
                    eleifend, scelerisque.
                </p>
                <p className="how-we-work-second-block-second-paragraph-text how-we-work-text">
                    Nam lacinia suscipit accumsan. Donec sodales, neque vitae
                    rutrum convallis, nulla tortor pharetra odio, in varius ante
                    ante sed nisi. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Duis dignissim mi
                    ut laoreet mollis.
                </p>
                <p className="how-we-work-second-block-third-paragraph-text how-we-work-text">
                    Maecenas ultrices tellus sit amet sem placerat tempor.
                    Maecenas eget arcu venenatis, sagittis felis sit amet,
                    dictum nisl. Orci varius natoque penatibus et magnis dis
                    parturient montes.
                </p>
            </div>
        </section>
    )
}

export default HowWeWork
