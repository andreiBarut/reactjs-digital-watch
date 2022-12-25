// import watchContainer from "../../watch-container.png";
import "./DigitalWatch.css";
import { useState } from "react";
import TimeZones from "../TimeZones";
import axios from "axios";
export default function DigitwalWacth() {
	let date = new Date();
	const [time, setTime] = useState(date.getSeconds());
	function findTime() {
		const [smth, setSmth] = useState(1);
	}
	//! here I have to make use of the ref from the TimeZone.jsx component (where the request is made) in order get the user-selected zone. With that state variable, I will make another axios request and get the time
	// const [selectedZone, setSelectedZone] = useState(ref?);

	setInterval(() => {
		//!EXPLAIN WHY
		//in order to render a variable that is changing, we have to use state, therefore we use the setSeconds on the stateless date variable which is the initial date object and we add 1 second to the date object, every second. And based on that, we update the time state variable every second, with the updated date.
		date.setSeconds(date.getSeconds() + 1);
		setTime(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
	}, 1000);

	return (
		<div>
			<div className="watch-container">
				<span>{time}</span>
			</div>
			<TimeZones />
		</div>
	);
}
