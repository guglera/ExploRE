
export default class ActivityData{
    constructor(titleDE, titleEN, imageUrl, websiteUrlDE, websiteUrlEN){
        this.titleDE = titleDE;
        this.titleEN = titleEN;
        this.imageUrl = imageUrl;
        this.websiteUrlDE = websiteUrlDE;
        this.websiteUrlEN = websiteUrlEN;
    }

getTitle = function (language) {
    return language === 'de' ? this.titleDE : this.titleEN
}

getDescription = function () {
    return this.description;    
}

getImageUrl = function () {
    return this.imageUrl;    
}

getWebsiteUrl = function (language) {
    return language === 'de' ? this.websiteUrlDE : this.websiteUrlEN   
}

}