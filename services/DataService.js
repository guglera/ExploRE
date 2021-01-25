import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import images from '../services/Images.js'
import PersonData from '../models/PersonData';
import HotelData from '../models/HotelData';
import ActivityData from '../models/ActivityData';
import HotelActivity from '../models/HotelActivity'
import colors from '../constants/colors.js';
import demoData from '../demoData/demo.json'
import Moment from 'moment';
import ActivityCard from '../components/ActivityCard.js'
import HotelActivityCard from '../components/HotelActivityCard.js';
import {fetchSpecificId} from './firebaseData'
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class DataService{
};
/*DataService.setData = async function (userId){
    fetchSpecificId(userId)
    const data = await AsyncStorage.getItem('data');
    return await JSON.parse(data);
}

DataService.init = async function(userId){
    const data = await DataService.setData(userId);
    this.data = data;
    console.log(this.data);
}
*/
function getUrl(userId) {
    try {
        const url = DataService.getHotelData(userId).getUrl();
        return (
                <TouchableOpacity
                    onPress={() => Linking.openURL(url)}
                    View style={styles.buttons}>
                    <Text style={styles.buttonText}>Forward me to the Hotel Website</Text>
                </TouchableOpacity>
        )
    } catch (error) {
        try {
            DataService.getHotelData(userId);
        } catch (error) {
            return parsingException(error);
        }
    }
}

function parsingException(error) {
    alert(error);
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>
                  No data found for your request. Please contact your reception!
            </Text>
        </View>
    );
}
   
function validateId(userId) {
    return 'undefined' !== typeof (demoData[userId]) ? true : false;
}

DataService.getPersonData = function getPersonData(userId) {
    if (validateId(userId)){
        const booking = demoData[userId];
        if ('undefined' !== typeof (booking) ){
            return new PersonData(booking);
        }
    }
    return null;
}

DataService.getHotelData = function getHotelData(userId) {
    return new HotelData(demoData[userId].HotelData);
}

DataService.validateId = function validateId(userId) {
    return 'undefined' !== typeof (demoData[userId]) ? true : false;
}

DataService.validateBonkingDate = function (userId, { navigation }) {
    let guestFrom = null;
    let guestTo = null;
    try {
        guestTo = getPersonData(userId).getGuestTo();
        guestFrom = getPersonData(userId).getGuestFrom();
    } catch (error) {
        return null;
    }

    if ('undefined' !== guestTo && 'undefined' !== guestFrom) {
        const now = Moment().format('YYYY-MM-DD');
        if (guestTo >= now && guestFrom <= now ){
            return (
            <View style={styles.scrollViewStyle}>
                <ScrollView contentContainerStyle={styles.scrollContainer}> 
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Morning Brief')}
                        View style={styles.buttons}>
                        <Text style={styles.buttonText}>Show me the Morning Brief</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Menu')}
                        View style={styles.buttons}>
                        <Text style={styles.buttonText}>Show me the Menu</Text>
                    </TouchableOpacity>
                    {getUrl(userId)}
                </ScrollView>
            </View>
          )
        }
    }
    return (            
        <View style={styles.scrollViewStyle}>
            <ScrollView contentContainerStyle={styles.scrollContainer}> 
                {getUrl(userId)}
            </ScrollView>
        </View>)
}

DataService.getHotelName = function (userId) {
    try {
        return getHotelData(userId).getName();
    } catch (error) {
        return null;
    }
}

DataService.getHotelId = function (userId) {
    try {
        let hotelId = getHotelData(userId).getMenu().getHotelId();
        return hotelId;
    } catch (error) {
        return "default";
    }

   }

DataService.getHotelImage = function (userId) {
    try {
        let image = getHotelData(userId).getBackgroundImage();
        return {uri: image};
    } catch (error) {
        return require('../assets/back4.png');
    } 
}

DataService.getMorningMail = function (userId) {
    try {
        return (< View style={styles.container} >
            <ImageZoom cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={Dimensions.get('screen').width}
                imageHeight={Dimensions.get('screen').height}>
                <Image style={styles.image}
                    source={{uri: getHotelData(userId).getMorningMailImage()}}
                    resizeMode='contain'
                />
            </ImageZoom>
        </View >
        );
    } catch (error) {
        return parsingException(error);
    }
}

DataService.getMenu = function (userId) {
    console.log(getHotelData(userId).getMenuImage());
    try {
        return (
            < View style={styles.container} >
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={Dimensions.get('screen').width}
                    imageHeight={Dimensions.get('screen').height}>
                    <Image style={styles.image}
                        source={{uri: getHotelData(userId).getMenuImage()}}
                        resizeMode='contain'
                    />
                </ImageZoom>
            </View >
        );
    } catch (error) {
        return parsingException(error);
    }
}

DataService.getGuestName = function(userId){
    let guestName = "";
    try {
        guestName = getPersonData(userId).getFirstName();
    } catch (error) {
        return "";
    }
    return guestName;
}

DataService.readFromStorage = async function(userId){
    fetchSpecificId(userId);
}


function getActivityData(userId) {   
    const activities = demoData[userId].ActivityData.map((activity) => new ActivityData(activity.titleDE, activity.titleEN, activity.imageUrl, activity.websiteUrlDE, activity.websiteUrlEN ));
    return activities
}

DataService.getActivityCards = function (userId, language) {
    const activitiesToDisplay =  getActivityData(userId).map( (activity, index) => {
        return(
            <ActivityCard
                activity = {activity}
                key = {index}
                language = {language}
            />
        )
    })
    
    return (
        <ScrollView contentContainerStyle={styles.cardsContainer}>
            {activitiesToDisplay}
        </ScrollView>  
    )
}

function getHotelActivity(userId) {   
    let hotelActivity = demoData[userId].HotelActivity;
    hotelActivity = hotelActivity.map((hotelActivity) => new HotelActivity(hotelActivity));
    return hotelActivity
}

DataService.getHotelActivityCards = function (userId, language) {
    const hotelActivitiesToDisplay =  getHotelActivity(userId).map( (hotelActivity, index) => {
        return(
            <HotelActivityCard
                hotelActivity = {hotelActivity}
                key = {index}
                indexNum = {index}
                userId = {userId}
                language = {language}
                service = {DataService}
            />
        )
    })
    
    return (
        <ScrollView contentContainerStyle={styles.activityContainer}>
            {hotelActivitiesToDisplay}
        </ScrollView>  
    )
}

DataService.getBookingPeriodFrom = function (userId) {
    let from = "";
    try {
        from = demoData[userId].PersonData.guestFrom;
    } catch (error) {
        return "";
    }
    return from;
}

DataService.getBookingPeriodTo = function (userId) {
    let to = "";
    try {
        to = demoData[userId].PersonData.guestTo;
    } catch (error) {
        return "";
    }
    return to;
}

DataService.bookHotelActivity = async function(userId, index){
    demoData[userId].HotelActivity[index].booked = true;
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      buttonText: {
        fontSize: 18,
        color: colors.buttonTxtColor,
        textShadowRadius: 10,
      },
      buttons: {
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: colors.buttonBackgrColor,
        marginVertical: 10, marginHorizontal: 16,
        paddingVertical: 30, paddingHorizontal: 20,
        borderRadius: 20,
        elevation: 5,
      },
      scrollViewStyle: {
        flex: 1,
        marginTop: -16,
        backgroundColor: colors.scrollViewBackgrColor,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
  
      scrollContainer: {
        paddingTop: 10,
        paddingBottom: 10,
      },

      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20     
      }
});