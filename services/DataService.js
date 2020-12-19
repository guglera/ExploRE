import React from 'react';
import PersonData from '../models/PersonData';
import HotelData from '../models/HotelData';
import demoData from '../demoData/demo.json'


export default class DataService{}

DataService.getPersonData = function(userId) {
       return new PersonData(demoData[userId].PersonData);
  }

DataService.getHotelData = function(userId) {
    return new HotelData(demoData[userId].HotelData);
}

DataService.validateId = function(userId) {
    return 'undefined' !== typeof(demoData[userId])? true: false;
}