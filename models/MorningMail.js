export default class MorningMails{
    constructor(title, filePath){
        this.filePath = filePath;
    }

getTitle = function() {
    return this.title;
}

getFilePath = function() {
    return this.filePath;
}
}