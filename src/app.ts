import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as debug from "debug";

import index_router from "./routes/index";
import user_router from "./routes/user";

const app: express.Application = express();
const log: debug.IDebugger = debug("ndm");

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", index_router);
app.use("/user", user_router);

app.listen(3000, () => {
    log("NDM server has been started. Listen on port 3000");
});
