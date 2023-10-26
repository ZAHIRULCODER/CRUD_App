import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation(); // Getting the props from Body component Link tag: state

	const handleUserUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.put(
				`/api/update-user/${id}`,
				{
					name,
					email,
					phone,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);

			toast.success(response.data.message);
			navigate("/");
		} catch (error) {
			toast.error(response.data.error.message);
		}
	};

	return (
		<form onSubmit={handleUserUpdate}>
			<div className="min-h-screen flex items-center justify-center">
				<div className="bg-white shadow-lg rounded-lg p-6 w-80 md:w-180">
					<div className="text-xl font-semibold mb-4">
						{/* Getting the props from Body component Link tag: state Update User  */}
						({location.state.name})
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name">
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
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
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
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="phone">
							Phone:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							type="tel"
							placeholder="(123) 456-7890"
							required
						/>
					</div>
					<div className="flex justify-center">
						<button
							className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit">
							Update User
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default UpdateUser;
