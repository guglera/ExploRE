export default class ActivityData{
    constructor(title, description, imageUrl, websiteUrl){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.websiteUrl = websiteUrl;
    }

getTitle = function () {
    return this.title;    
}

getDescription = function () {
    return this.description;    
}

getImageUrl = function () {
    return this.imageUrl;    
}

getWebsiteUrl = function () {
    return this.websiteUrl;    
}

}