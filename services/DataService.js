import React from 'react';
import PersonlaData from '../models/PersonalData';
import Interest from '../models/Interest';
import HotelData from '../models/HotelData';
import Menu from '../models/Menu';
import MorningMail from '../models/MorningMail';


export default class DataService{}

DataService.getPersonData = function(userId) {
       return new PersonlaData("TestFirstname", "TestLastname");
  }

DataService.getInterest = function(userId) {
    return new Interest("first interest", true);
}
DataService.getHotelData = function(userId) {
    return new HotelData("HotelName", "47.259659", "11.400375");
}
DataService.getMenu = function(userId) {
    return new Menu("lunch",'2020-12-16',  "./xy");
}
DataService.getMorningMail = function(userId) {
    return new MorningMail("lunch", "./xy");
}