/*
    Routes name: Main Authentication Routes
    Routes start: /api/auth/auth
*/

import express from "express";

import { Access } from "$app/controllers/index.js";

const router = express.Router();

router.post("/", Access.ACCESS);

export default router;
