// require main looks at the main in package.json and finds for modules relative to it
const fileStructure = require.main?.require("./../file-structure.json");

export enum mediaTypes {
    chatImages = <any>fileStructure.chatImages,
    chatGIFs = <any>fileStructure.chatGIFs,
    chatStickers = <any>fileStructure.chatStickers,
    chatVideos = <any>fileStructure.chatVideos,
    images = <any>fileStructure.images,
    gifs = <any>fileStructure.gifs,
    videos = <any>fileStructure.videos,
    profiles = <any>fileStructure.profiles,
    null = <any>"null"
}
