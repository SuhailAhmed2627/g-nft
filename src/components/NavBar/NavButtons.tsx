import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { PropTypes } from "./types";
import { mobileNavWidth } from "../../utils/constants";
import searchIcon from "../../../public/assets/searchicon.svg";

const NavButtons = (props: PropTypes) => {
	return (
		<>
			{props.currentWidth > mobileNavWidth ? (
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
			<div className={styles.navButtons}>
				<Link className={styles.navButton} to="/">
					Explore
				</Link>
				<Link className={styles.navButton} to="/">
					My Items
				</Link>
				<Link className={styles.navButton} to="/">
					Following
				</Link>
				{props.currentWidth > mobileNavWidth ? (
					<>
						<a className={styles.navButton}>
							<button className={styles.navButtonGradient}>
								Create
							</button>
						</a>
						<a className={styles.navButton}>
							<button className={styles.navButtonBorderGradient}>
								Connect
							</button>
						</a>
					</>
				) : (
					<div className={styles.gradientButtonContainer}>
						<a className={styles.navButton}>
							<button className={styles.navButtonGradient}>
								Create
							</button>
						</a>
						<a className={styles.navButton}>
							<button className={styles.navButtonBorderGradient}>
								Connect
							</button>
						</a>
					</div>
				)}
			</div>
		</>
	);
};

export default NavButtons;
