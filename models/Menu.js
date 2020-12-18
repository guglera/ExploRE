import Moment from 'moment';

export default class Menu{
    constructor(title, dateFrom, filePath){
        this.title = title;
        this.dateFrom = Moment(dateFrom).format('YYYY-MM-DD');
        this.filePath = filePath;
    }
}

Menu.getTitle = function() {
    return this.title;
}

Menu.getDateFrom = function() {
    return this.dateFrom;
}

Menu.getFilePath = function() {
    return this.filePath;
}