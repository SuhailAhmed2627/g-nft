import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Item from "./pages/Item/Item";

export const App = (): JSX.Element => {
	//alert("pls be connected to the internet or fonts wont load :(");
	return (
		<div className={styles.App}>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/item" element={<Item />} />
				<Route path="*" element={/*<NotFound />*/ <></>}></Route>
			</Routes>
			<Footer />
		</div>
	);
};
