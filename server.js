import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import customerRoutes from "./routes/customers.js";
import path from "path";
import UserDetail from "./models/user.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/static", express.static(path.resolve("client", "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(cors());
app.use("/", userRoutes);
app.use("/home", customerRoutes);

app.post("/login", async (req, res) => {
  const user = await UserDetail.findOne(req.body);

  if (user.email === req.body.email) {
    res.status(200).send({ msg: "success" });
    /* res.sendFile(path.resolve("client", "home.html")); */
  }
});
app.get("/home", (req, res) => {
  res.sendFile(path.resolve("client", "home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve("client", "login.html"));
});

app.post("/home", (req, res) => {
  console.log(req.body);
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
