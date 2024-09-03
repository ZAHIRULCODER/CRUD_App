import { CrudModel } from "../models/crudModels.js";
import { addUserSchema, updateUserSchema } from "../types/types.js";


export const handleAddUser = async (req, res) => {
	try {
		const createPayload = req.body;
		const parsedPayload = addUserSchema.safeParse(createPayload);

		if (!parsedPayload.success) {
			return res.status(400).json({ success: false, message: "You sent invalid inputs" });
		}
		const { name, email, phone } = createPayload;

		await CrudModel.create({ name, email, phone });

		res.status(201).json({ success: true, message: "User Added successfully" });
	} catch (error) {
		console.log(error);
		console.log(error);

		if (error.code === 11000) {
			const duplicateField = Object.keys(error.keyPattern)[0];
			return res.status(409).json({
				success: false,
				message: `A user with this ${duplicateField} already exists.`
			});
		}

		res.status(500).json({ success: false, message: "An unexpected error occurred" });
	}
};

export const handleUpdateUser = async (req, res) => {
	try {
		const { id } = req.params;

		const updatePayload = req.body;
		const parsedPayload = updateUserSchema.safeParse(updatePayload);

		if (!parsedPayload.success) {
			return res.status(400).json({
				success: false,
				message: "Invalid inputs",
			});
		}

		const { name, email, phone } = updatePayload;

		const updatedUser = await CrudModel.findByIdAndUpdate(id, {
			name,
			email,
			phone,
		}, { new: true });

		if (!updatedUser) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		res.status(200).json({
			success: true,
			message: "User updated successfully",
			updatedUser,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error.message });
	}
};

export const handleSingleUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await CrudModel.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error.message });
	}
};


export const handleAllUsers = async (req, res) => {
	try {
		const users = await CrudModel.find();

		res.status(201).json({ success: true, users });
	} catch (error) {
		console.log(error);
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
		console.log(error);
		res.status(500).json({ success: false, message: error.message });
	}
};
