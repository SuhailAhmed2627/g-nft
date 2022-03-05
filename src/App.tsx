import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
export const App = (): JSX.Element => {
	//alert("pls be connected to the internet or fonts wont load :(");
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="profile/:id" element={/*<Profile />*/ <></>} />
				<Route path="item/:id" element={/*<Item />*/ <></>} />
				<Route path="*" element={/*<NotFound />*/ <></>}></Route>
			</Routes>
		</>
	);
};
