import React from "react";
import styles from "./styles.module.css";
import one from "../../assets/sellers/1.png";
import two from "../../assets/sellers/2.png";
import three from "../../assets/sellers/3.png";
import four from "../../assets/sellers/4.png";
import five from "../../assets/sellers/5.png";
import check from "../../assets/check.svg";

const sellers = [
	{ img: one, name: "Mia Ayana", value: "5.520" },
	{ img: two, name: "Rian Leon", value: "4.932" },
	{ img: three, name: "Lady Young", value: "4.620" },
	{ img: four, name: "Black Glass", value: "4.125" },
	{ img: five, name: "Budhiman", value: "3.921" },
];

const TopSellers = () => {
	return (
		<div className={styles.outerContainer}>
			{sellers.map((seller, index) => {
				return (
					<div className={styles.cardContainer} key={index}>
						<div className={styles.cardIndexContainer}>
							<div className={styles.cardIndex}>{index + 1}</div>
						</div>
						<div className={styles.cardImgContainer}>
							<img
								className={styles.sellerImg}
								src={seller.img}
								alt={seller.name}
							/>
							<div className={styles.checkImgContainer + " flex-center"}>
								<img
									className={styles.checkImg}
									src={check}
									alt="Check Icon"
								/>
							</div>
						</div>
						<div className={styles.cardName + " p1-sem"}>
							{seller.name}
						</div>
						<div className={styles.cardValue + " p1-sem"}>
							{seller.value} <span className="p1-reg">ETH</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TopSellers;
