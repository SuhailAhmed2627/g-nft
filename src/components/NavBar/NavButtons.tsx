import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavButtons = () => {
	return (
		<>
			<div className={styles.searchBarContainer}>
				<div className={styles.searchBar}></div>
			</div>
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
				<a className={styles.navButton}>
					<button className={styles.navButtonGradient}>Create</button>
				</a>
				<a className={styles.navButton}>
					<button className={styles.navButtonBorderGradient}>
						Connect
					</button>
				</a>
			</div>
		</>
	);
};

export default NavButtons;
