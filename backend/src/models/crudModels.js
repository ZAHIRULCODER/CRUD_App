import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: Number,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

export const CrudModel = mongoose.model("CrudModel", crudSchema);
