import "./Navbar.css";
import logo from "../../app-logo.png";
export default function Navbar() {
	return (
		<nav>
			<img src={logo} alt="hourglass logo" />
			<span>ReactJS Digital Watch</span>
		</nav>
	);
}
