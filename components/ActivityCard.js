import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../constants/colors.js';

const ActivityCard = (props) =>{
    return (
        <View style={styles.cardContainer}>
            <Image source={{uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/54/e6/94.jpg'}} 
            style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.cardText}>Activity  123456789 123456789 1234567 Text über ca.30 Zeichen wird abgeschnitten</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        // flex: 1,
        height:200,
        width:'45%',
        // borderWidth: 1,
        borderColor: colors.cardBorderColor,
        backgroundColor: colors.cardColor,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        elevation:15,
        marginTop:'2%',
        marginBottom:'2%',
        marginLeft:'2%',
        marginRight:'2%',
        paddingBottom:0,
        overflow:'hidden'
    },
     cardText:{
        textAlign:'center',
        fontSize:18,
        color:colors.buttonTxtColor,
        fontWeight:'bold'
    },
    image:{
        width:'100%',
        height: '75%', 
    },
    textContainer:{
        height:'25%',
        width:'100%',
        backgroundColor:colors.headlineTxtBackgrColor
    }
 });

export default ActivityCard;