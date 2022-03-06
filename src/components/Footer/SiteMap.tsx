import React from "react";
import styles from "./styles.module.css";

const SiteMap = () => {
	return (
		<>
			<div className={styles.impLinks}>
				<span className="h3">Graphique NFT</span>
				<span className="p3-reg">Explore</span>
				<span className="p3-reg">How it Works</span>
				<span className="p3-reg">Contact Us</span>
			</div>
			<div className={styles.support}>
				<span className="h3">Support</span>
				<span className="p3-reg">Help center</span>
				<span className="p3-reg">Terms of service</span>
				<span className="p3-reg">Legal</span>
				<span className="p3-reg">Privacy policy</span>
			</div>
		</>
	);
};

export default SiteMap;
