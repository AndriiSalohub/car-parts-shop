import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Main />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
