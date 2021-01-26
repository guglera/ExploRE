export default class MorningMails{
    constructor(title, morningMailImage){
        this.title = title;
        this.morningMailImage = morningMailImage;
    }

getTitle = function() {
    return this.title;
}

getMorningMailImage = function() {
    return this.morningMailImage;
}
}