import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchSingleUser = async () => {
			try {
				const response = await axios.get(`/api/v1/single-user/${id}`);
				setName(response.data.user.name);
				setEmail(response.data.user.email);
				setPhone(response.data.user.phone);
			} catch (error) {
				console.log(error);
				toast.error(error.response.data.message);
			}
		};
		fetchSingleUser();
	}, [id]);

	const handleUserUpdate = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(`/api/v1/update-user/${id}`, {
				name,
				email,
				phone,
			});

			toast.success(response.data.message);
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	return (
		<form onSubmit={handleUserUpdate}>
			<div className="min-h-screen flex items-center justify-center">
				<div className="bg-white shadow-lg rounded-lg p-6 w-80 md:w-180">
					<div className="text-xl font-semibold mb-4">Update Details</div>
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
							className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Update User
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default UpdateUser;
