import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRouter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 6969;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
