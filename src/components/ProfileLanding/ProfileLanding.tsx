import React from "react";
import styles from "./styles.module.css";
import profilebg from "../../assets/profilebg.png";
import searchIcon from "../../assets/searchicon.svg";
import one from "../../assets/sellers/1.png";

const ProfileLanding = () => {
	return (
		<div className={styles.profileLanding}>
			<img className={styles.profilebgImg} src={profilebg} alt="CityScape" />
			<div className={styles.profileImgContainer}>
				<img className={styles.profileImg} src={one} alt="Profile Img" />
				<span className={styles.profileName + " h1"}>Mia Ayana</span>
			</div>
			<div className={styles.searchContainer}>
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
			</div>
		</div>
	);
};

export default ProfileLanding;
