import React from "react";
import { Link } from "react-router-dom";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { BsPersonFillAdd } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="bg-black h-12 flex text-white p-6 justify-between items-center sm:text-xl">
			<div>CRUD APP</div>
			<div>
				<ul className="flex gap-5">
					<li className="flex items-center">
						<Link to="/" className="flex items-center">
							<FaHouseChimneyUser className="mr-1" />
							Home
						</Link>
					</li>

					<li className="flex items-center">
						<Link to="/add-user" className="flex items-center">
							<BsPersonFillAdd className="mr-1" />
							Add User
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
