import express from "express"
import dbConnection from "./dbContact/MongdbConnection.js";
import router from "./routes/UserRoute.js";
import dotenv from "dotenv"
const app = express();

dbConnection()

dotenv.config();
const PORT = 3000;

app.use(express.json());
app.use('/user/api1', router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
