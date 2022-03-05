import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import "./common.css";
import logo from "../../../public/assets/logo.png";
import NavButtons from "./NavButtons";
import HamburgerIcon from "../../../public/assets/hamburger-icon.svg";
import CloseIcon from "../../../public/assets/close-icon.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	const toggleMobileNav = () => {
		const mobileNav = document.getElementById("mobileNav");
		mobileNav?.classList.toggle("navbarActive");
	};

	const handleClick = (e: React.MouseEvent) => {
		const mobileNav = document.getElementById("mobileNav");
		if (
			e.target !== mobileNav &&
			e.currentTarget.contains(e.target as Node)
		) {
			toggleMobileNav();
		}
	};

	return (
		<>
			<span id="home"></span>
			<div className={styles.navBarContainer}>
				<div className={styles.navBar}>
					<div
						className={styles.navLogo}
						onClick={() => {
							navigate("/#home");
						}}
					>
						<img
							src={logo}
							alt="G-NFT Logo"
							className={styles.navLogoImg}
						/>
						<p className={styles.navLogoText}>Graphique NFT</p>
					</div>
					{screenWidth > 600 ? (
						<NavButtons />
					) : (
						<img
							className={styles.hamburgerIcon}
							onClick={toggleMobileNav}
							src={HamburgerIcon}
							alt="Nav Menu"
						/>
					)}
				</div>
				{screenWidth < 600 ? (
					<div
						className={styles.mobileNav}
						id="mobileNav"
						onClick={handleClick}
					>
						<div className={styles.mobileNavButtonContainer}>
							<div className={styles.closeIconContainer}>
								<img
									className={styles.closeIcon}
									src={CloseIcon}
									alt="Close Icon"
								/>
							</div>
							<NavButtons />
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Navbar;
