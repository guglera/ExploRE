export default class HotelDate {
    constructor(name, lat, lon){
        this.name = name;
        this.lat = lat;
        this.lon = lon;
    }
}

HotelDate.getName = function() {
    return this.name;
}

HotelDate.getLat = function() {
    return this.lat;
}

HotelDate.getLon = function() {
    return this.lon;
}