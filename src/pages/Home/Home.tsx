import React from "react";
import styles from "./styles.module.css";
import TagCard from "../../components/TagCard/TagCard";
import TopSellers from "../../components/TopSellers/TopSellers";

export const Home = (): JSX.Element => {
	return (
		<div className={styles.container + " flex-center"}>
			<div className={styles.tagCardContainer + " flex-center"}>
				<TagCard />
			</div>
			<TopSellers />
		</div>
	);
};
