
export default class HotelData {
    constructor(hotelData){
        this.name = hotelData.name;
        this.url = hotelData.url;
        this.hotelId = hotelData.hotelId;
        this.location = hotelData.location;
        this.hotelBackgroundImage = hotelData.hotelBackgroundImage;
        this.menuImage = hotelData.menuImage;
        this.morningMailImage = hotelData.morningMailImage;

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

    getMenuImage = function () {
        return this.menuImage;
    }

    getMorningMailImage = function () {
        return this.morningMailImage;
    }

    getUrl = function () {
        return this.url;
    }
    getHotelId = function () {
        return this.hotelId;
    }
    getBackgroundImage = function() {
        return this.hotelBackgroundImage
    }
}