// importing dependencies
import express from "express";
import dotenv from "dotenv";
import fileupload from "express-fileupload";
import cors from "cors";
// import bodyParser from "body-parser";

// importing modules
import mediaWrite from "./lib/mediaWrite";
import chalk from "chalk";

dotenv.config(); // configuring application with environment variables

const HOST_IP = process.env.HOST_IP ?? `127.0.0.1`;
const PORT = Number(process.env.PORT) ?? 3456; // the port for serving files
const MEDIA_LOCATION = process.env.MEDIA_LOCATION ?? process.cwd(); // location of media

// creating all the necessary folders if they haven't been created already
// the media folders are created in the root in root of project if MEDIA_LOCATION
// environment variable is already not created
require("./lib/createMediaFolders").create(MEDIA_LOCATION);

const app = express();
const jsonParser = express.json();

// const urlencodedParser = express.urlencoded({ extended: false });

// serving media from the media folder
app.use("/get", express.static(`${MEDIA_LOCATION}/media`));

app.use(fileupload());
app.use(cors());

app.post("/upload", jsonParser, mediaWrite);

app.get("*", function (req, res) {
    res.status(404).sendFile(process.cwd() + `/assets/error/404.svg`);
});

app.listen(PORT, HOST_IP);
console.log(
    `\n\nStarted the server\n\n\t${chalk.blueBright.underline.bold(
        `http://${HOST_IP}:${PORT}`
    )}\n\n`
);
