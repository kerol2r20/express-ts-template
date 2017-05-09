import * as express from "express";

const router: express.Router = express.Router();

router.get("/", (req, res) => {
    res.render("hello", {name: "NDM"});
});

export default router;
