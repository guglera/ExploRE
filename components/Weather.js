import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import { localeData } from 'moment'
import DataService from '../services/DataService';

    /*
        For more Info see: https://openweathermap.org/api/one-call-api
    */

const weather_api_key = '1eefaf10ed0813c788223cdcf71986be'
const base_weather_url = 'https://api.openweathermap.org/data/2.5/onecall?'
const lat = DataService.validateId("508103379")?DataService.getHotelData("508103379").getLat():null;//'47.259659'
const lon = DataService.validateId("508103379")?DataService.getHotelData("508103379").getLon():null;//'11.400375'

export function Weather () {
    const [current_weather, setCurrentWeather] = useState({temp: 0, icon: '', weather_info: ''})
    const [weather_forecast, setWeatherForecast] = useState({temp: 0, icon: '', weather_info: ''})

    useEffect(() => {    
        (async () => { 

            //get current & daily weather forecast weather
            //make API request by Latitude and longitude
            const weather_url = `${base_weather_url}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${weather_api_key}`
            const response = await fetch(weather_url)
            const result = await response.json()       
            //console.log(result)
            setCurrentWeather({temp : result.current.temp, icon: result.current.weather[0].icon, weather_info: result.current.weather[0].description})
            setWeatherForecast({temp: result.daily[0].temp.day, icon: result.daily[0].weather[0].icon, weather_info: result.daily[0].weather[0].main})
        })();
    }, []);

   
    const iconUrl = `https://openweathermap.org/img/wn/${current_weather.icon}@4x.png`
    const tomorrow_iconUrl = `https://openweathermap.org/img/wn/${weather_forecast.icon}@4x.png`

    return (
        <View>
            <View style = {styles.cardContainer}>
                <View style={styles.weatherCard}>
                    <Text style = {styles.header}>Aktuelles Wetter</Text>
                    <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
                    <Text style = {styles.textPrimary}>{current_weather.weather_info}</Text>
                    <Text style={styles.textPrimary}>{current_weather.temp}°C</Text>
                </View>     
                <View style={styles.weatherCard}>
                    <Text style = {styles.header}>Wetter Morgen</Text>
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
        height: 200,
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        elevation: 15,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    weatherIcon: {
        width: 80,
        height: 80,
    },
    textPrimary: {
        textAlign: 'center',
        flex: 1,
        fontSize: 14,
        color: 'white',
    },
    header: {
        textAlign: 'center',
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },

})