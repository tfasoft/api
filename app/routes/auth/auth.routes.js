/*
    Routes name: Main Authentication Routes
    Routes start: /api/auth/auth
*/

import express from "express";

import { Auth } from "$app/controllers/index.js";

const router = express.Router();

router.post("/login", Auth.LOGIN);
router.post("/register", Auth.REGISTER);

export default router;
