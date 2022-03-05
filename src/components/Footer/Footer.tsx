import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Footer = (): JSX.Element => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.emailContainer}>
					<div className={styles.footerLogo}>
						<img className={styles.footerLogoImg} src={logo} alt="Logo" />
						Graphique NFT
					</div>
					<div className={styles.latestUpdates}></div>
					<div className={styles.email}></div>
				</div>
				<div className={styles.contactContainer}></div>
				<div className={styles.copyrightContainer}></div>
			</div>
			<div className={styles.postFooter}></div>
		</>
	);
};

export default Footer;
