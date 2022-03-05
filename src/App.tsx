import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

export const App = (): JSX.Element => {
	//alert("pls be connected to the internet or fonts wont load :(");
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="profile/:id" element={<Profile />} />
				<Route path="item/:id" element={/*<Item />*/ <></>} />
				<Route path="*" element={/*<NotFound />*/ <></>}></Route>
			</Routes>
			<Footer />
		</>
	);
};
