/*
    Routes name: User Data Routes
    Routes start: /api/user/user
*/

import express from "express";

import { User } from "$app/controllers/index.js";

const router = express.Router();

router.get("/:tid", User.SINGLE);

export default router;
