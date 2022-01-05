import { UploadedFile } from "express-fileupload";
import { mediaTypes } from "./mediaTypes";
// require main looks at the main in package.json and finds for modules relative to it
// const fileStructure = require.main?.require("./../file-structure.json");

function mediaDetect(media: UploadedFile, isChat: boolean, isProfile: boolean): mediaTypes {
    let saveLocation: mediaTypes = mediaTypes.null;
    // if it is not chat media, forward to media to normal folders
    // but if it is chat media, save it in chat folders

    if (isProfile) {
        saveLocation = mediaTypes.profiles;
        return saveLocation;
    }

    if (isChat) {
        switch (media.mimetype) {
            // for images
            case "image/jpeg":
                saveLocation = mediaTypes.chatImages;
                break;
            case "image/png":
                saveLocation = mediaTypes.chatImages;
                break;
            case "image/svg+xml":
                saveLocation = mediaTypes.chatImages;
                break;
            case "video/webp":
                saveLocation = mediaTypes.chatImages;
                break;

            // for videos
            case "video/mp4":
                saveLocation = mediaTypes.chatVideos;
                break;
            case "video/mpeg":
                saveLocation = mediaTypes.chatVideos;
                break;
            case "video/ogg":
                saveLocation = mediaTypes.chatVideos;
                break;
            case "video/webm":
                saveLocation = mediaTypes.chatVideos;
                break;
            case "video/x-msvideo":
                saveLocation = mediaTypes.chatVideos;
                break;

            // for GIFs
            case "image/gif":
                saveLocation = mediaTypes.chatGIFs;
                break;

            default:
                saveLocation = mediaTypes.null;
        }
    } else {
        switch (media.mimetype) {
            // for images
            case "image/jpeg":
                saveLocation = mediaTypes.images;
                break;
            case "image/png":
                saveLocation = mediaTypes.images;
                break;
            case "image/svg+xml":
                saveLocation = mediaTypes.images;
                break;
            case "video/webp":
                saveLocation = mediaTypes.images;
                break;

            // for videos
            case "video/mp4":
                saveLocation = mediaTypes.videos;
                break;
            case "video/mpeg":
                saveLocation = mediaTypes.videos;
                break;
            case "video/ogg":
                saveLocation = mediaTypes.videos;
                break;
            case "video/webm":
                saveLocation = mediaTypes.videos;
                break;
            case "video/x-msvideo":
                saveLocation = mediaTypes.videos;
                break;

            // for GIFs
            case "image/gif":
                saveLocation = mediaTypes.gifs;
                break;

            default:
                saveLocation = mediaTypes.null;
        }
    }

    if (saveLocation == mediaTypes.null) {
        throw new Error(`The media type is not acceptable - ${media.mimetype}`);
    }

    return saveLocation;
}

export default mediaDetect;
