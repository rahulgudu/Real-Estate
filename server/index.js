const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 6969;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
