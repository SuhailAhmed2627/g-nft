import styles from "./App.module.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Item from "./pages/Item/Item";

function createjscssfile(filename: string, filetype: string) {
	let fileref;
	if (filetype == "js") {
		//if filename is a external JavaScript file
		fileref = document.createElement("script");
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") {
		//if filename is an external CSS file
		fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	return fileref;
}

function replacejscssfile(
	oldfilename: string,
	newfilename: string,
	filetype: string
) {
	const targetelement =
		filetype == "js" ? "script" : filetype == "css" ? "link" : "none"; //determine element type to create nodelist using
	const targetattr =
		filetype == "js" ? "src" : filetype == "css" ? "href" : "none"; //determine corresponding attribute to test for
	const allsuspects = document.getElementsByTagName(targetelement);
	for (let i = allsuspects.length; i >= 0; i--) {
		//search backwards within nodelist for matching elements to remove
		if (
			allsuspects[i] &&
			allsuspects[i].getAttribute(targetattr) != null &&
			allsuspects[i]?.getAttribute(targetattr)?.indexOf(oldfilename) != -1
		) {
			const newelement = createjscssfile(newfilename, filetype);
			allsuspects[i]?.parentNode?.replaceChild(
				newelement as HTMLScriptElement | HTMLLinkElement,
				allsuspects[i]
			);
		}
	}
}

export const App = (): JSX.Element => {
	const handleChange = (event: MediaQueryListEvent) => {
		if (event.matches) {
			replacejscssfile("./index-light.css", "./index-dark.css", "css");
		} else {
			replacejscssfile("./index-dark.css", "./index-light.css", "css");
		}
	};

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleChange);

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleChange);
		};
	}, []);

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
