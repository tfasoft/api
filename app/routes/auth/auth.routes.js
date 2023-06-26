/*
    Routes name: Main Authentication Routes
    Routes start: /api/auth/auth
*/

import express from "express";

import { Auth } from "$app/controllers/index.js";

const router = express.Router();

router.post("/request", Auth.REQUEST);
router.post("/verify", Auth.VERIFY);
router.get("/:id", Auth.FETCH);

export default router;
