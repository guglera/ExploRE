export default class MornigMails{
    constructor(title, filePath){
        this.title = title;
        this.filePath = filePath;
    }
}

MornigMails.getTitle = function() {
    return this.title;
}

MornigMails.getFilePath = function() {
    return this.filePath;
}