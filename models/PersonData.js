import Interest from './Interest'
import Moment from 'moment';

export default class PersonData{
    constructor(personData){
        this.gender = personData.gender;
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.guestFrom = Moment(personData.guestFrom).format('YYYY-MM-DD');
        this.guestTo = Moment(personData.guestTo).format('YYYY-MM-DD');
        const interests = personData.Interest;
        this.interests = interests.map((interests) =>  new Interest(interests.name, interests.value))
    }

getGender = function () {
    return this.gender;    
}

getFirstName = function() {
    return this.firstName;
}

getLastName = function() {
    return this.lastName;
}

getFullName = function() {
    return this.firstName + " " + this.lastName;
}

getGuestFrom = function() {
    return this.guestFrom;
}

getGuestTo = function() {
    return this.guestTo;
}

getInterests = function () {
    return this.interests; 
}

}