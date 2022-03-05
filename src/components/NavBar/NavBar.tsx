import React from "react";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import "./common.css";
import logo from "../../assets/logo.png";
import NavButtons from "./NavButtons";
import HamburgerIcon from "../../assets/hamburger-icon.svg";
import searchIcon from "../../assets/searchicon.svg";
import CloseIcon from "../../assets/close-icon.png";
import favicon from "../../assets/favicon.ico";
import { useNavigate } from "react-router-dom";
import { mobileNavWidth } from "../../utils/constants";
import { Helmet } from "react-helmet";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	const toggleMobileNav = (): void => {
		const mobileNav = document.getElementById("mobileNav");
		setIsNavOpen(!isNavOpen);
		mobileNav?.classList.toggle("navbarActive");
	};

	const handleClick = (e: React.MouseEvent): void => {
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
			<Helmet>
				<link rel="icon" href={favicon} />
			</Helmet>
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
						{screenWidth > 900 ? (
							<p className={styles.navLogoText}>Graphique NFT</p>
						) : null}
					</div>
					{screenWidth < mobileNavWidth && !isNavOpen ? (
						<div className={styles.searchBarContainer}>
							<div className={styles.searchBar}>
								<img
									className={styles.searchBarIcon}
									src={searchIcon}
									alt="Search Icon"
								/>
								<input
									className={styles.searchInput}
									placeholder="Search Item Here"
									type="text"
								/>
							</div>
						</div>
					) : null}
					{screenWidth > mobileNavWidth ? (
						<NavButtons currentWidth={screenWidth} />
					) : isNavOpen ? (
						<img
							className={styles.closeIcon}
							onClick={toggleMobileNav}
							src={CloseIcon}
							alt="Close Icon"
						/>
					) : (
						<img
							className={styles.hamburgerIcon}
							onClick={toggleMobileNav}
							src={HamburgerIcon}
							alt="Nav Menu"
						/>
					)}
				</div>
				{screenWidth < mobileNavWidth ? (
					<div
						className={styles.mobileNav}
						id="mobileNav"
						onClick={handleClick}
					>
						<div className={styles.mobileNavButtonContainer}>
							<NavButtons currentWidth={screenWidth} />
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Navbar;
