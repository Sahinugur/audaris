import express from "express";
import { getUsers, createUser, userLogin } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.post("/", userLogin);

export default router;
