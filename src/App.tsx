import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main className="">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={
                            <React.Fragment>
                                <Homepage/>
                            </React.Fragment>
                        }/>
                    </Routes>
                </main>
            </BrowserRouter>
        )
    }
}
