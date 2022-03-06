import React from "react";
import styles from "./styles.module.css";
import { bidInterface, propTypes } from "./types";

import one from "../../assets/bids/bid1.png";
import two from "../../assets/bids/bid2.png";
import three from "../../assets/bids/bid3.png";
import four from "../../assets/bids/bid4.png";
import five from "../../assets/bids/bid5.png";
import six from "../../assets/bids/bid6.png";
import seven from "../../assets/bids/bid7.png";
import eight from "../../assets/bids/bid8.png";

const bidDetails: bidInterface[] = [
	{
		index: 0,
		name: "Abstact Smoke Red Blue",
		cost: "1.25",
		heart: 92,
		img: one,
	},
	{
		index: 1,
		name: "Mountain Landscape",
		cost: "0.20",
		heart: 25,
		img: two,
	},
	{
		index: 2,
		name: "Paint Color on Wall",
		cost: "0.55",
		heart: 55,
		img: three,
	},
	{
		index: 3,
		name: "Abstract Patern",
		cost: "0.87",
		heart: 82,
		img: four,
	},
	{
		index: 4,
		name: "White Line Grafiti",
		cost: "0.09",
		heart: 22,
		img: five,
	},
	{
		index: 5,
		name: "Abstract Triangle",
		cost: "0.90",
		heart: 71,
		img: six,
	},
	{
		index: 6,
		name: "Lake Landscape",
		cost: "0.52",
		heart: 63,
		img: seven,
	},
	{
		index: 7,
		name: "Blue Red Art",
		cost: "0.85",
		heart: 66,
		img: eight,
	},
];

const HotBids = (props: propTypes) => {
	return (
		<div className={styles.sectionContainer}>
			{props.head ? (
				<div className={styles.sectionHeading + " h1"}>Hot Bids</div>
			) : null}
			<div className={styles.bidsContainer}>
				{bidDetails.map((bid: bidInterface) => (
					<div key={bid.index} className={styles.bidContainer}>
						<div className={styles.image}>
							<img src={bid.img} />
						</div>
						<div className={styles.title + " p2-sem"}>{bid.name}</div>
						<div className={styles.info + " p3-reg"}>
							<div className={styles.price + " p3-sem"}>
								{bid.cost} <span className="p3-reg">ETH</span>
							</div>
							<div
								className={"flex-center"}
								style={{ flexDirection: "row", gap: "2px" }}
							>
								<span
									className={"flex-center"}
									style={{ flexDirection: "row" }}
								>
									<svg
										width="13"
										height="12"
										viewBox="0 0 13 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.548 1.70105C10.9268 1.02731 10.0745 0.65625 9.1478 0.65625C8.45511 0.65625 7.82074 0.875244 7.26227 1.3071C6.98047 1.52509 6.72513 1.79178 6.5 2.10306C6.27496 1.79187 6.01953 1.52509 5.73764 1.3071C5.17926 0.875244 4.54489 0.65625 3.8522 0.65625C2.92551 0.65625 2.07306 1.02731 1.45187 1.70105C0.838104 2.36691 0.5 3.27658 0.5 4.2626C0.5 5.27747 0.878204 6.20645 1.69019 7.18625C2.41656 8.06268 3.46054 8.95239 4.66949 9.98264C5.08231 10.3345 5.55023 10.7333 6.0361 11.1581C6.16446 11.2705 6.32916 11.3324 6.5 11.3324C6.67075 11.3324 6.83554 11.2705 6.96371 11.1583C7.44958 10.7334 7.91779 10.3344 8.33078 9.98236C9.53955 8.9523 10.5835 8.06268 11.3099 7.18616C12.1219 6.20645 12.5 5.27747 12.5 4.26251C12.5 3.27658 12.1619 2.36691 11.548 1.70105Z"
											fill="#24252D"
										/>
									</svg>
								</span>
								{bid.heart}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HotBids;
