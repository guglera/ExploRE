export default class HotelActivity{
    constructor(titleDE, titleEN, descriptionDE, descriptionEN, imageUrl, hotelActivityFrom, hotelActivityTo, schedule, registrationMail, activityUrlDE, activityUrlEN){
            this.titleDE = titleDE;
            this.titleEN = titleEN;
            this.descriptionDE = descriptionDE;
            this.descriptionEN = descriptionEN;
            this.imageUrl = imageUrl;
            this.hotelActivityFrom = hotelActivityFrom;
            this.hotelActivityTo = hotelActivityTo;
            this.schedule = schedule;
            this.registrationMail = registrationMail;
            this.activityUrlDE = activityUrlDE;
            this.activityUrlEN = activityUrlEN;
        }

    getTitle = function (language) {return language === 'de' ? this.titleDE : this.titleEN}
    getDescription = function (language) {return language === 'de' ? this.descriptionDE : this.descriptionEN;}
    getImageUrl = function () {return this.imageUrl;}
    getHotelActivityImageUrl = function () {return this.imageUrl;}
    getFrom = function () {return this.hotelActivityFrom;}
    getTo = function () {return this.hotelActivityTo;}
    getSchedule = function () {return this.schedule;}
    getRegMail = function () {return this.registrationMail;}
    getActivityUrl = function (language) {return language === 'de' ? this.activityUrlDE : this.activityUrlEN;}
}