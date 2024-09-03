import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const navigation = useNavigate();

	const handleAddUser = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/v1/add-user",{name, email, phone});
			toast.success(response.data.message);
			navigation("/");
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	return (
		<form onSubmit={handleAddUser}>
			<div className="min-h-screen flex items-center justify-center">
				<div className="bg-white shadow-lg rounded-lg p-6 w-80 ">
					<div className="text-xl font-semibold mb-4">Add User</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
							Name:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Zahirul Islam"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
							Email:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="zahirul@example.com"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
							Phone:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							type="number"
							placeholder="(123) 456-7890"
							required
						/>
					</div>
					<div className="flex justify-center">
						<button
							className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Add User
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddUser;
