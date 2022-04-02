import React from "react";
import logo from '../logo.svg';

export default function Header(){
	return (

		<nav className="header">
			<img className="header__logo" src={logo} alt="logo" width="60"/>
			<h2 className="header__name">ReactFacts</h2>
			<h4 className="header__project">React Course - Project 1</h4>
		</nav>

	)
}