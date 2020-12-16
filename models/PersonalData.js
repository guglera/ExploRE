import {Interest} from './Interest'

export default class PersonlaData{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = firstname + " " + lastname;
    }
}

PersonlaData.getFullName = function() {
    return this.fullName;
}