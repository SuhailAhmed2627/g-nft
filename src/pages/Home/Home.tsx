import React from "react";
import { HomeProps } from "./types";

export const Home = ({ message }: HomeProps): JSX.Element => {
	return <div>{message}</div>;
};
