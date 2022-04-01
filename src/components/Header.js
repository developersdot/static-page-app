import React from "react";
import logo from '../logo.svg';

export default function Header(){
	return (

		<div className="header">
			<img src={logo} className="App-logo" alt="logo" width="60"/>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>

	)
}