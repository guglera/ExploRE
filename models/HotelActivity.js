export default class HotelActivity{
        constructor(titleDE, titleEN, imageUrl, hotelActivityFrom, hotelActivityTo, schedule, registrationMail, descriptionDE, descriptionEN, activityUrlDE, activityUrlEN){
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

    getTitle = function (language) {
        return language === 'de' ? this.titleDE : this.titleEN
    }

    getDescription = function (language) {
        return language === 'de' ? this.descriptionDE : this.descriptionEN
    }

    getActivityUrl = function (language) {
        return language === 'de' ? this.activityUrlDE : this.activityUrlEN   
    }
    
    getImageUrl = function () {
        return this.imageUrl;    
    }

    getRegMail = function () {
        return this.registrationMail;    
    }

    getSchedule = function () {
        return this.schedule;
    }

    getFrom = function () {
        return this.hotelActivityFrom;
    }

    getTo = function () {
        return this.hotelActivityTo;
    }
}