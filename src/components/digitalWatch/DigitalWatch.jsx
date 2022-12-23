// import watchContainer from "../../watch-container.png";
import "./DigitalWatch.css";
import { useState } from "react";
import TimeZones from "../TimeZones";
export default function DigitwalWacth() {
	// const [date, setDate] = useState(new Date());
	const [date, setDate] = useState(new Date());
	setInterval(() => {
		setDate(new Date());
	}, 1000);
	console.log(date);
	return (
		<div>
			<div className="watch-container">
				<span>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</span>
			</div>
			<TimeZones />
		</div>
	);
}
