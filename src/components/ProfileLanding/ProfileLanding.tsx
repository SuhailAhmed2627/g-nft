import React from "react";
import styles from "./styles.module.css";
import profilebg from "../../assets/profilebg.png";
import one from "../../assets/sellers/1.png";

const ProfileLanding = () => {
	return (
		<div className={styles.profileLanding}>
			<img className={styles.profilebgImg} src={profilebg} alt="CityScape" />
			<div className={styles.profileImgContainer}>
				<img className={styles.profileImg} src={one} alt="Profile Img" />
				<span className={styles.profileName + " h1"}>Mia Ayana</span>
			</div>
		</div>
	);
};

export default ProfileLanding;
