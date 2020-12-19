import Moment from 'moment';

export default class Menu{
    constructor(title, filePath){
        this.title = title;
        this.filePath = filePath;
    }

getTitle = function() {
    return this.title;
}

getDateFrom = function() {
    return this.dateFrom;
}

getFilePath = function() {
    return this.filePath;
}
}