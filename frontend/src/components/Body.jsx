import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Body = () => {
	const [allUsers, setAllUsers] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/v1/all-users");

				setAllUsers(response?.data?.users);
			} catch (error) {
				toast.error(response.data.error.message);
			}
		})();
	}, []);

	const handleDeleteUser = async (id) => {
		try {
			const response = await axios.delete(`/api/v1/delete-user/${id}`);

			setAllUsers((prevUser) => prevUser.filter((user) => user._id !== id));
			toast.success(response.data.message);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	return (
		<div className="flex-grow">
			<div className="flex items-center justify-center pt-5">
				<div className="w-full max-w-3xl">
					<div className="bg-white shadow-md rounded p-4">
						<table className="min-w-full">
							<thead>
								<tr>
									<th className="px-4 py-2">ID</th>
									<th className="px-4 py-2">Name</th>
									<th className="px-4 py-2">Email</th>
									<th className="px-4 py-2">Phone</th>
									<th className="px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{allUsers.map((user, index) => (
									<tr key={user._id}>
										<td className="border px-4 py-2 text-center">{index + 1}</td>
										<td className="border px-4 py-2 text-center">{user.name}</td>
										<td className="border px-4 py-2 text-center">{user.email}</td>
										<td className="border px-4 py-2 text-center">{user.phone}</td>
										<td className="border px-4 py-2 text-center">
											<button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-1 px-2 rounded mr-1">
												<Link to={`/update-user/${user._id}`} state={{ name: user.name }}>
													{/* passing props in Link tag and consume it using useLocation */}
													Update
												</Link>
											</button>
											<button
												onClick={() => handleDeleteUser(user._id)} // pass the id to the function above
												className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-center"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
