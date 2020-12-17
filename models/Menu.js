import Moment from 'moment';

export default class Manu{
    constructor(title, dateFrom, filePath){
        this.title = title;
        this.dateFrom = Moment(dateFrom).format('YYYY-MM-DD');
        this.filePath = filePath;
    }
}