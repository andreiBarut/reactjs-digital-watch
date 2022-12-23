// import watchContainer from "../../watch-container.png";
import "./DigitalWatch.css";
import { useState } from "react";
export default function DigitwalWacth() {
	const [date, setDate] = useState(new Date());
	setInterval(() => {
		setDate(new Date());
	}, 1000);
	console.log(date);
	return (
		<div className="watch-container">
			{/* <span>text</span> */}
			{/* <img src={watchContainer} alt="watch container" /> */}
			<span>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</span>
		</div>
	);
}
