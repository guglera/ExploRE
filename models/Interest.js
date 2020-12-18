export default class Interest{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

Interest.getName = function() {
    return this.name;
}

Interest.getValue= function() {
    return this.value;
}