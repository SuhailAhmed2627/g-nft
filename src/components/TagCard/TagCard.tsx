import React from "react";
import styles from "./styles.module.css";

const TagCard = () => {
	return (
		<>
			<div className={styles.tagCard + " flex-center"}>
				<div className={styles.circle}>
					<div className={styles.circle1}></div>
					<div className={styles.circle2}></div>
				</div>
				<div className={styles.tag}>
					Discover, collect, and sell extraordinary NFTs
				</div>
			</div>
		</>
	);
};

export default TagCard;
