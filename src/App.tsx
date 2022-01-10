import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main className="">
                    <Routes>
                        <Route path="/" element={
                            <React.Fragment>

                            </React.Fragment>
                        }/>
                    </Routes>
                </main>
            </BrowserRouter>
        )
    }
}
