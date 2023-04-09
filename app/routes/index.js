import express from "express";

import Access from "$app/routes/access/access.routes.js";
import User from "$app/routes/user/user.routes.js";
import Auth from "$app/routes/auth/auth.routes.js";

const router = express.Router();

router.use("/access", Access);
router.use("/users", User);
router.use("/auth", Auth);

export default router;
