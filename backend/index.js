import express from "express";
import dbConnection from "./dbContact/MongdbConnection.js";
import router from "./routes/UserRoute.js";
import dotenv from "dotenv/config";
import cors from "cors";
import Createpoll from "./routes/PollingRoute.js";

const app = express();

// Load environment variables (optional, since you used "dotenv/config" in import)

// Connect to the database
dbConnection();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/user/api1', router);
app.use('/user/voting', Createpoll);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
