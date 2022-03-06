import React from "react";
import styles from "./styles.module.css";
import ProfileLanding from "../../components/ProfileLanding/ProfileLanding";
import HotBids from "../../components/HotBids/HotBids";

const Profile = (): JSX.Element => {
	return (
		<div className={styles.container + " flex-center"}>
			<ProfileLanding />
			<HotBids search />
		</div>
	);
};

export default Profile;
