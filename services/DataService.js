import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import images from '../services/Images.js'
import PersonData from '../models/PersonData';
import HotelData from '../models/HotelData';
import ActivityData from '../models/ActivityData';
import demoData from '../demoData/demo.json';
import colors from '../constants/colors.js';
import Moment from 'moment';

export default class DataService { }

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

DataService.getPersonData = function getPersonData(userId) {
    return new PersonData(demoData[userId].PersonData);
}

DataService.getHotelData = function getHotelData(userId) {
 return new HotelData(demoData[userId].HotelData);
}

DataService.getActivityData = function getActivityData(userId) {
    return new ActivityData(demoData[userId].ActivityData);
}
   
function validateId(userId) {
    return 'undefined' !== typeof (demoData[userId]) ? true : false;
}

function getPersonData(userId) {
    if (validateId(userId)){
        const booking = demoData[userId].PersonData;
        if ('undefined' !== typeof (booking) ){
            return new PersonData(booking);
        }
    }
    return null;
}

function getHotelData(userId) {
 return new HotelData(demoData[userId].HotelData);
}

function getActivityData(userId) {
    return new ActivityData(demoData[userId].ActivityData);
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
        let hotelId = getHotelData(userId).getHotelId();
        return hotelId;
    } catch (error) {
        return "default";
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
                    source={images.morningMail[getHotelData(userId).getHotelId()]}
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
    try {
        return (
            < View style={styles.container} >
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={Dimensions.get('screen').width}
                    imageHeight={Dimensions.get('screen').height}>
                    <Image style={styles.image}
                        source={images.menu[getHotelData(userId).getHotelId()]}
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
});