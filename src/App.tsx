import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default class App extends React.Component {
	render = () => (
		<BrowserRouter>
			<main className="">
				<Navbar/>
				<Routes>
					<Route
						path="/"
						element={
							<React.Fragment>
								<Homepage/>
							</React.Fragment>
						}
					/>
				</Routes>
				<Footer/>
			</main>
		</BrowserRouter>
	);
}
