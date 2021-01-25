import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import key from '../ENV/ENV.js'
import i18n from 'i18n-js';
import { AuthContext } from '../contexts/authContext';
import { useContext } from 'react';
import { translations } from '../components/Languages';
i18n.fallbacks = true;


    /*
        For more Info see: https://openweathermap.org/api/one-call-api
    */

const base_weather_url = 'https://api.openweathermap.org/data/2.5/onecall?'
       
export function Weather (props) {
    const [current_weather, setCurrentWeather] = useState({temp: 0, icon: '', weather_info: ''})
    const [weather_forecast, setWeatherForecast] = useState({temp: 0, icon: '', weather_info: ''})

    const weather_url = `${base_weather_url}lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key.weatherKey}&lang=${props.language}`
    

    //get current & daily weather forecast weather
    //make API request by Latitude and longitude
    useEffect(() => {    
        (async () => {       
            try {         
                const response = await fetch(weather_url)
                const result = await response.json()    
                setCurrentWeather({temp : result.current.temp, icon: result.current.weather[0].icon, weather_info: result.current.weather[0].description})
                setWeatherForecast({temp: result.daily[0].temp.day, icon: result.daily[0].weather[0].icon, weather_info: result.daily[0].weather[0].description})     
            } catch (error) {
                console.error(error)
            }       
        })();
    }, [props]);

    const globalLang = useContext(AuthContext);
    i18n.locale = globalLang.language.displaylanguage;
   
    const iconUrl = `https://openweathermap.org/img/wn/${current_weather.icon}@4x.png`
    const tomorrow_iconUrl = `https://openweathermap.org/img/wn/${weather_forecast.icon}@4x.png`
    
    return (
        <View>
            <View style = {styles.cardContainer}>
                <View style={styles.weatherCard}>
                    <Text style = {styles.header}>{i18n.t('weatherWelcomeScreen1')}</Text>
                    <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
                    <Text style = {styles.textPrimary}>{current_weather.weather_info}</Text>
                    <Text style={styles.textPrimary}>{current_weather.temp}°C</Text>
                </View>     
                <View style={styles.weatherCard}>
                    <Text style = {styles.header}>{i18n.t('weatherWelcomeScreen2')}</Text>
                    <Image style={styles.weatherIcon} source={{ uri: tomorrow_iconUrl }} />
                    <Text style = {styles.textPrimary}>{weather_forecast.weather_info}</Text>
                    <Text style={styles.textPrimary}>{weather_forecast.temp}°C</Text>
                </View>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    weatherCard: {
        height: 150,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#73a0ba',
        borderRadius: 20,
        elevation: 5,
        opacity: 0.9,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        //marginTop: 20,
        marginVertical: 10, marginHorizontal: 16,
    },
    weatherIcon: {
        width: 60,
        height: 60,
    },
    textPrimary: {
        textAlign: 'center',
        textTransform: 'capitalize', 
        //flex: 1,
        fontSize: 14,
        color: 'white',
    },
    header: {
        textAlign: 'center',
        //flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        //marginTop: 10,
    },

})