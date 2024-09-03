import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import crudRoutes from "./routes/crudRoutes.js";

const app = express();
dotenv.config();

//mongoDB connection
connectDB();

app.use(express.static("public"));

// parse request to body-parser
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: [process.env.FRONTEND_URL],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use(express.json());


app.use("/api/v1", crudRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the server (This is for testing only)");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
