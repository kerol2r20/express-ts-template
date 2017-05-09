import * as express from "express";

const router: express.Router = express.Router();

router.get("/", (req, res) => {
    res.send("I'm in user router");
});

export default router;
