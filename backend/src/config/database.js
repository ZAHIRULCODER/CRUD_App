import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGO_URI, {
			dbName: "crudDB",
		});

		console.log(`Connected to the database: ${connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};
