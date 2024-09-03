import express from "express";
import {
	handleAllUsers,
	handleAddUser,
	handleUpdateUser,
	handleDeleteUser,
	handleSingleUser,
} from "../controllers/crudControllers.js";

const crudRoutes = express.Router();

crudRoutes.get("/all-users", handleAllUsers);
crudRoutes.post("/add-user", handleAddUser);
crudRoutes.put("/update-user/:id", handleUpdateUser);
crudRoutes.get("/single-user/:id", handleSingleUser);
crudRoutes.delete("/delete-user/:id", handleDeleteUser);

export default crudRoutes;


