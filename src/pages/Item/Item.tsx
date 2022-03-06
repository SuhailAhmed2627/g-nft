import React, { useState } from "react";
import styles from "./styles.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./reacttabedit.css";
import img from "../../assets/img.png";
import creator from "../../assets/miaAyana.png";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		zIndex: "900",
	},
};

const Item = (): JSX.Element => {
	const [isLiked, setLiked] = useState(false);
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className={styles.checkoutModal}>
					<div className={styles.modalHeader}></div>
					<div className={styles.modalConent}></div>
					<div className={styles.modalFooter}></div>
				</div>
			</Modal>
			<div className={styles.container}>
				<div className={styles.imageContainer + " flex-center"}>
					<img src={img} />
				</div>
				<div className={styles.details}>
					<div>
						<div className={styles.titleAndLikes}>
							<div className={styles.title + " h1"}>
								Abstact Smoke Red Blue
							</div>
							<div className={styles.likesContainer}>
								<div
									className={styles.likes}
									onClick={() => setLiked(!isLiked)}
								>
									<span>
										<svg
											width="13"
											height="12"
											viewBox="0 0 13 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.548 1.70105C10.9268 1.02731 10.0745 0.65625 9.1478 0.65625C8.45511 0.65625 7.82074 0.875244 7.26227 1.3071C6.98047 1.52509 6.72513 1.79178 6.5 2.10306C6.27496 1.79187 6.01953 1.52509 5.73764 1.3071C5.17926 0.875244 4.54489 0.65625 3.8522 0.65625C2.92551 0.65625 2.07306 1.02731 1.45187 1.70105C0.838104 2.36691 0.5 3.27658 0.5 4.2626C0.5 5.27747 0.878204 6.20645 1.69019 7.18625C2.41656 8.06268 3.46054 8.95239 4.66949 9.98264C5.08231 10.3345 5.55023 10.7333 6.0361 11.1581C6.16446 11.2705 6.32916 11.3324 6.5 11.3324C6.67075 11.3324 6.83554 11.2705 6.96371 11.1583C7.44958 10.7334 7.91779 10.3344 8.33078 9.98236C9.53955 8.9523 10.5835 8.06268 11.3099 7.18616C12.1219 6.20645 12.5 5.27747 12.5 4.26251C12.5 3.27658 12.1619 2.36691 11.548 1.70105Z"
												fill={isLiked ? "#FF0000" : "#000000"}
											/>
										</svg>
									</span>
									<span className="p2-reg">92</span>
								</div>
							</div>
						</div>
						<div className={"p2-reg"}>
							From <span className={"p2-sem"}>4.5 ETH</span> . 20 of 25
							available
						</div>
					</div>
					<div className={styles.creatorDeets}>
						<div className="p3-reg">Creator</div>
						<div className={styles.creatorImg}>
							<img src={creator} />
							<span className="p2-sem">Mia Ayana</span>
						</div>
					</div>
					<Tabs>
						<TabList>
							<Tab>Details</Tab>
							<Tab>Offers</Tab>
							<Tab>History</Tab>
						</TabList>

						<TabPanel>
							<div className={styles.content + " p1-reg"}>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry&apos;s standard dummy text ever since the
								1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book
							</div>
							<div className={styles.gradientButtonContainer}>
								<button
									onClick={() => openModal()}
									className={styles.buttonGradient}
								>
									Buy for 4.5 ETH
								</button>
								<button className={styles.buttonBorderGradient}>
									Make Offer
								</button>
							</div>
						</TabPanel>
						<TabPanel>
							<div className={styles.content + " p1-reg"}>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry&apos;s standard dummy text ever since the
								1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book
							</div>
							<div className={styles.gradientButtonContainer}>
								<button className={styles.buttonGradient}>
									Buy for 4.5 ETH
								</button>
								<button className={styles.buttonBorderGradient}>
									Make Offer
								</button>
							</div>
						</TabPanel>
						<TabPanel>
							<div className={styles.content + " p1-reg"}>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry&apos;s standard dummy text ever since the
								1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book
							</div>
							<div className={styles.gradientButtonContainer}>
								<button className={styles.buttonGradient}>
									Buy for 4.5 ETH
								</button>
								<button className={styles.buttonBorderGradient}>
									Make Offer
								</button>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Item;
