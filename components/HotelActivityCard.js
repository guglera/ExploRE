import React from 'react';
import {StyleSheet, View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import colors from '../constants/colors.js';

const HotelActivityCard = (props) =>{
    return (
        <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() => Linking.openURL(props.hotelActivity.getActivityUrl(props.language))}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.cardHeader}>{props.hotelActivity.getTitle(props.language)}</Text>
                    <Text style={styles.cardText}>{props.hotelActivity.getDescription(props.language)}</Text>
                    <Text style={styles.cardHeader}>{props.hotelActivity.getSchedule()}</Text>
                </View>
                <View style={styles.textLink}>
                    <Text style={styles.cardHeader}>Reservation</Text>
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        // flex: 1,
        height:180,
        width:'97%',
        // borderWidth: 2,
        borderColor: colors.cardBorderColor,
        backgroundColor: colors.cardColor,
        // justifyContent: 'flex-end',
        alignItems: 'baseline',
        elevation:15,
        marginTop:'1%',
        marginBottom:'2%',
        marginLeft:'1%',
        marginRight:'1%',
        paddingBottom:0,
        overflow:'hidden'
    },
     cardHeader:{
        textAlign:'center',
        fontSize:18,
        color:colors.buttonTxtColor,
        fontWeight:'bold'
    },
     cardText:{
        textAlign:'center',
        fontSize:14,
        color:colors.buttonTxtColor,
        fontWeight:'normal'
    },
    image:{
        width:'100%',
        height: '75%', 
    },
    textHeader:{
        height:'30%',
        width:'100%',
        backgroundColor:colors.headlineTxtBackgrColor
    },
    textContainer:{
        height:'80%',
        width:'100%',
        // color:colors.textColor,
        backgroundColor:colors.activityBackgrColor
    },
    textLink:{
        alignItems:'center',
        height:'20%',
        width:'100%',
        backgroundColor:colors.buttonBackgrColor
    }
 });

export default HotelActivityCard;