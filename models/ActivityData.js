export default class ActivityData{
    constructor(activityData){
        this.title = activityData.title;
        this.description = activityData.description;
        this.description = activityData.description;
        this.imageUrl = activityData.imageUrl;
        this.websiteUrl = activityData.websiteUrl;
        this.websiteUrl = activityData.websiteUrl;
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