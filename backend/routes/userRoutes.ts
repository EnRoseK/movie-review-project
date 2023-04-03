import express from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", createUser);

export default router;
