import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

const App = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
};

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/add-user",
		element: <AddUser />,
	},
	{
		path: "/update-user/:id",
		element: <UpdateUser />,
	},
]);

export default App;
