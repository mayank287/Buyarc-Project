


import React, { useState } from "react";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import logoweb from "../../../images/logoweb.png";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const Header = () => {
	const history = useHistory();
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	const { cartItems } = useSelector((state) => state.cart);
	
		const [keyword, setKeyword] = useState("");
	  
		const searchSubmitHandler = (e) => {
		  e.preventDefault();
		  if (keyword.trim()) {
			history.push(`/products/${keyword}`);
		  } else {
			history.push("/products");
		  }
		};
	  

	return (
		<>


			<nav className="Navbar">
				{/* <div className="icon"> <img src={logoweb} alt="Logo.png" className="icon" /> </div> */}
				{/* <div class="icon">Design <b style="color: red;">P</b>ro</div> */}
				<NavLink to="/" className="divicon">

					<div className="icon">
						<b>B</b>uy
						<b>A</b>rc


					</div>
				</NavLink>
				<div className="search_box">
					{/* <input type="search" placeholder="Search here" /> */}
					{/* <TextField id="outlined-basic" label="Outlined" variant="outlined"  /> */}
					<form className="NavSearch" onSubmit={searchSubmitHandler}>
						<input
							type="text"
							placeholder="Search a Product ..."
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<input type="submit" placeholder="Search" />
					</form>

				</div>
				<div>
					<ol>
						<li> <NavLink to="/" className="Links"> Home </NavLink>  </li>
						<li> <NavLink to="/Products" className="Links">  Products</NavLink></li>
						<li> <NavLink to="/about" className="Links">about</NavLink></li>
						<li> <NavLink to="/contact" className="Links"> Contact</NavLink></li>
						<li> <NavLink to="/login" className="Links"> <LoginIcon /></NavLink></li>
						<li> <NavLink to="/cart" className="Links">
							<Badge badgeContent={cartItems.length} color ="warning">

								<ShoppingCartIcon />
							</Badge>
						</NavLink></li>
					</ol>
				</div>

			</nav>
		</>
	);
};


export default Header;