import express from "express";
import { getBaristas, createBarista } from "../controllers/baristaController.js";

const router = express.Router();

router.get("/", getBaristas);
router.post("/", createBarista);

export default router;