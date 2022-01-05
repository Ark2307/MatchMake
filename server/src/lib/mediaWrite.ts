import chalk from "chalk";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
// import { MediaRequest } from "./media/MediaRequest";
import mediaDetect from "./media/mediaDetect";

function convertToBool(data: string): boolean {
    data = data.toLowerCase();
    return data == "true" ? true : false;
}

function mediaWrite(req: Request, res: Response) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    // The name of the input field (i.e. "File") is used to retrieve the uploaded file
    let File = req.files.file as UploadedFile;
    let { isChat, isProfile, fileName } = req.body;
    isChat = convertToBool(isChat);
    isProfile = convertToBool(isProfile);

    // console.log(req.isChat);
    // Use the mv() method to place the file somewhere on your server

    let saveLocation = mediaDetect(File, isChat, isProfile);

    File.mv(
        `${process.env.MEDIA_LOCATION ?? process.cwd()}${saveLocation}${fileName}`,
        function (err: Error) {
            if (err) return res.status(500).send(err);
            console.log(`${chalk.green(`Uploaded`)} - ${saveLocation}${fileName}`);
            res.status(200).send(File.mimetype);
        }
    );
}

export default mediaWrite;
