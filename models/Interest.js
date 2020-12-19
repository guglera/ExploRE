export default class Interest{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }

getName = function() {
    return this.name;
}

getValue= function() {
    return this.value;
}
}