export default class HotelDate {
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}

HotelDate.getName = function() {
    return this.name;
}

HotelDate.getLocation = function() {
    return this.location;
}