import axios from "axios";
import React, { useState } from "react";

const baseURL =
	"http://api.timezonedb.com/v2.1/list-time-zone?key=83ZJ170FGGYI&format=json";

export default function TimeZones() {
	const [zones, setZones] = useState(null);

	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setZones(response.data);
			console.log(zones);
		});
	}, []);
	//! I have to use ref to get the value from the input
	// function getRef() {
	// 	return
	// }

	if (!zones) return null;

	return (
		<div>
			<input list="zones" name="zones" ref={getRef} />
			<datalist id="zones">
				{zones.zones.map((zone) => {
					return <option value={zone.zoneName} key={zone.zoneName} />;
				})}
			</datalist>
		</div>
	);
}
