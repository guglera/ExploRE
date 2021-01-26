export default class HotelActivity{
        constructor(hotelActivity){
            this.titleDE = hotelActivity.titleDE;
            this.titleEN = hotelActivity.titleEN;
            this.descriptionDE = hotelActivity.descriptionDE;
            this.descriptionEN = hotelActivity.descriptionEN;
            this.imageUrl = hotelActivity.imageUrl;
            this.hotelActivityFrom = hotelActivity.hotelActivityFrom;
            this.hotelActivityTo = hotelActivity.hotelActivityTo;
            this.schedule = hotelActivity.schedule;
            this.registrationMail = hotelActivity.registrationMail;
            this.activityUrlDE = hotelActivity.activityUrlDE;
            this.activityUrlEN = hotelActivity.activityUrlEN;
            this.booked = hotelActivity.booked;
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
    getBooked = function() { return this.booked};
}