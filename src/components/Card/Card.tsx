import React from "react";
import styles from "./styles.module.css";

interface CardPropsNft {
	imgLink: string;
	name: string;
	cost: number;
	likes: number;
}

interface CardPropsUser {
	type: "USER";
	imgLink: string;
	name: string;
	cost: number;
	notif: number;
}

interface CardPropsNft {
	type: "NFT";
	imgLink: string;
	name: string;
	cost: number;
	likes: number;
}

interface CardProps {
	device: "PHONE" | "DESKTOP";
	data: CardPropsNft | CardPropsUser;
}

const Card = (props: CardProps) => {
	if (props.device === "DESKTOP" && props.data.type === "NFT") {
		return (
			<div className={styles.card}>
				<div>
					<img src={require(props.data.imgLink)} />
				</div>
				<div className={styles.nftName}>{props.data.name}</div>
				<div className={styles.info}>
					<div className={styles.cost}>
						<span className={styles.amt}>{props.data.cost}</span>
						<span>ETH</span>
					</div>
					<div>
						<span>❤️</span>
						{props.data.likes}
					</div>
				</div>
			</div>
		);
	} else if (props.device === "DESKTOP" && props.data.type === "USER") {
		return (
			<div className={styles.card}>
				<div className={styles.notif}>
					<div className={styles.notifBubble}>{props.data.notif}</div>
				</div>
				<div className={styles.picContainer}>
					<img src={require(props.data.imgLink)} />
					<div>{/* SVG*/}</div>
				</div>
				<div className={styles.name}>{props.data.name}</div>
				<div className={styles.balance}>
					<span className={styles.amt}>{props.data.cost}</span>ETH
				</div>
			</div>
		);
	} else if (props.device === "PHONE" && props.data.type === "NFT") {
		return <></>;
	} else {
		return <></>;
	}
};

export default Card;
