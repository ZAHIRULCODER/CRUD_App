import { CrudModel } from "../models/crudModels.js";

export const handleAddUser = async (req, res) => {
	try {
		const { name, email, phone } = req.body;

		await CrudModel.create({ name, email, phone });

		res.status(201).json({ success: true, message: "User Added successfully" });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

export const handleAllUsers = async (req, res) => {
	try {
		const users = await CrudModel.find({});

		res.status(201).json({ success: true, users });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

export const handleUpdateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, email, phone } = req.body;
		const updatedUser = await CrudModel.findByIdAndUpdate(id, {
			name,
			email,
			phone,
		});

		if (!updatedUser) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(201).json({
			success: true,
			message: "User Updated successfully",
			updatedUser,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

export const handleDeleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedUser = await CrudModel.findByIdAndDelete(id);

		if (!deletedUser) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(201).json({
			success: true,
			message: "User deleted Succesfully",
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
