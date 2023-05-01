/*
    Routes name: User Data Routes
    Routes start: /api/user/user
*/

import express from "express";

import { Docs } from "$app/controllers/index.js";

const router = express.Router();

router.get("/tree", Docs.TREE);

export default router;
