import React from "react";
import styles from "./styles.module.css";
import uploadImg from "../../assets/upload.png";

const Create = () => {
	return (
		<div className={styles.createPage}>
			<div className={styles.createNew}>
				<span className="h1">Create New Item</span>
				<span className="h2">Upload File</span>
			</div>
			<div className={styles.uploadImgContainer}>
				<img
					src={uploadImg}
					alt="upload img"
					className={styles.uploadImg}
				/>
			</div>
			<div className={styles.feilds}>
				<span className="h2">Name</span>
				<input
					className={styles.nameInput}
					type="text"
					placeholder="Enter Name Here"
				/>
			</div>
			<div className={styles.feilds}>
				<span className="h2">Description</span>
				<input
					className={styles.desInput}
					type="text"
					placeholder="Enter Description here"
				/>
			</div>
			<div className={styles.feilds}>
				<span className="h2">Price</span>
				<input
					className={styles.nameInput}
					type="text"
					placeholder="Enter Price Here"
				/>
			</div>
			<div className={styles.submitButtonContainer}>
				<button className={styles.navButtonGradient}>Create New</button>
			</div>
		</div>
	);
};

export default Create;
