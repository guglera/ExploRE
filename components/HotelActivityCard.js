
import React from 'react';
import {StyleSheet, View, Text, Image, Alert, Linking, TouchableOpacity} from 'react-native';
import colors from '../constants/colors.js';
import i18n from 'i18n-js';
import { translations } from '../components/Languages';
import { ImageBackground } from 'react-native';
import { ImageBackgroundBase } from 'react-native';
i18n.fallbacks = true;

const HotelActivityCard = (props) =>{
    return (
        <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() => Linking.openURL(props.hotelActivity.getActivityUrl(props.language))}
            >
            <ImageBackground  source={{uri: props.hotelActivity.getImageUrl()}} style={styles.image}>
                <Text style={styles.linkText}>{i18n.t('txtHotelActivityScreen1')}</Text>
            </ImageBackground>
            <View style={styles.textContainer}>
                <Text style={styles.cardHeader}>{props.hotelActivity.getTitle(props.language)} : {props.hotelActivity.getSchedule()}</Text>
                <Text style={styles.cardText}>{props.hotelActivity.getDescription(props.language)}</Text>
            </View>
            
                {props.hotelActivity.getBooked()?
                <View style={styles.linkContainerBooked}>
                    <Text style={styles.reservationText} >{i18n.t('txtHotelActivityScreen4')}</Text>
                </View>
                :
                <View style={styles.linkContainer}>
                    <Text style={styles.reservationText} onPress={() => props.service.bookHotelActivity(props.userId,props.indexNum)}>{i18n.t('txtHotelActivityScreen2')}</Text>
                </View>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        height:300,
        width:'97%',
        borderColor: colors.cardBorderColor,
        elevation:6,
        marginTop:'1%',
        marginBottom:'2%',
        marginLeft:'1%',
        marginRight:'1%',
        paddingBottom:0,
        backgroundColor:colors.activityBackgrColor,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height: 160, 
    },    
    textContainer:{
        height:'26%',
        width:'100%',
        marginLeft:'2%',
        marginRight:'2%',
        marginBottom:'2%',
        backgroundColor:colors.activityBackgrColor
        // backgroundColor:colors.activityBackgrColor headlineTxtBackgrColor buttonTxtColor textColor
    },    
     cardHeader:{
        textAlign:'center',
        fontSize:18,
        color:colors.buttonTxtColor,
        fontWeight:'bold'
    },
     cardText:{
        // textAlign:'center',
        fontSize:11,
        color:colors.buttonTxtColor,
        fontWeight:'normal'
    },
    textHeader:{
        height:'30%',
        width:'100%',
        backgroundColor:colors.headlineTxtBackgrColor
    },
    linkContainer:{
        height:'28%',
        width:'100%',
        marginTop:'3%',
        backgroundColor:colors.headlineTxtBackgrColor
    },
    linkText:{
        textAlign:'right',
        fontSize:14,
        fontStyle:'italic',
        marginTop:'2%',
        marginRight:'10%',
        color:colors.buttonTxtColor
    },
    reservationText:{
        textAlign:'center',
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'bold',
        color:colors.textColor
    },
    linkContainerBooked:{
        height:'28%',
        width:'100%',
        marginTop:'3%',
        backgroundColor:colors.containerColorBooked
    },
 });

export default HotelActivityCard;