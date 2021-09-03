import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
	return (
		<div id="header">
			<div className="header_desktop">
				<h1 className="header_logo">
					<Link to="/"></Link>
				</h1>
				<nav className="menu">
					<ul>
					<li>
						<Link to="/" className="menu_detail">ALL</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">BRAND#</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">TECH</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">BEAUTY</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">LIVING</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">OUTDOOR</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">HEALTY</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">FOOD</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">PET</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">HOTEL/GOURMET</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">BOOKS</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">VINYLS</Link>
					</li>
					<li>
						<Link to="/" className="menu_detail">HYUNDAICARD</Link>
					</li>
					</ul>
				</nav>
				<div className="top_right">
					<Link to="/" className="header_btn_search"></Link>
					<Link to="/" className="header_btn_noti"></Link>
					<Link to="/" className="header_btn_cart"></Link>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
