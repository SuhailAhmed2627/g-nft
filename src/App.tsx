import React from "react";
import { Routes, Route } from "react-router-dom";

export const App = (): JSX.Element => {
	return (
		<div className="app">
			{/* Navbar */}
			<Routes>
				<Route path="/" element={/*<Home />*/ <></>} />
				<Route path="profile/:id" element={/*<Profile />*/ <></>} />
				<Route path="item/:id" element={/*<Item />*/ <></>} />
				<Route path="*" element={/*<NotFound />*/ <></>}></Route>
			</Routes>
		</div>
	);
};
