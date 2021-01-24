import Moment from 'moment';

export default class Menu{
    constructor(title, menuImage){
        this.title = title;
        this.menuImage = menuImage;
    }

getTitle = function() {
    return this.title;
}

getMenuImage = function() {
    return this.menuImage;
}
}