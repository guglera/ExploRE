import Menu from './Menu'
import MorningMail from './MorningMail'

export default class HotelData {
    constructor(hotelData){
        this.name = hotelData.name;
        this.url = hotelData.url;
        this.backgpic = hotelData.backgpic;
        this.location = hotelData.location;
        const menu = hotelData.Menu;
        this.menu = menu.map((menu) =>  new Menu(menu.title, menu.filePath));
        const morningMail = hotelData.MorningMail;
        this.morningMail = morningMail.map((morningMail) => new MorningMail(morningMail.title, morningMail.filePath));
    }

    getName = function() {
        return this.name;
    }

    getLat = function() {
        return this.location.lat;
    }

    getLon = function() {
        return this.location.lon;
    }

    getMenu = function () {
        return this.menu;
    }

    getMorningMail = function () {
        return this.morningMail;
    }
    getUrl = function () {
        return this.url;
    }
    getBackgPic = function () {
        return this.backgpic;
    }
}