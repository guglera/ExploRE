import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { localeData } from 'moment'

    /*
        For more Info see: https://openweathermap.org/current
    */

const weather_api_key = '1eefaf10ed0813c788223cdcf71986be'
const base_weather_url = 'https://api.openweathermap.org/data/2.5/onecall?'
const lat = '47.259659'
const lon = '11.400375'

export function Weather () {
    console.log("=============")
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

    console.log(tomorrow_iconUrl)

    return (
        <View style style={styles.weatherInfo}>
            <View style style={styles.weatherdaily}>
                <Text style = {styles.textPrimary}>Aktuelles Wetter</Text>
                <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
                <Text style = {styles.textPrimary}>{current_weather.weather_info}</Text>
                <Text style={styles.textPrimary}>{current_weather.temp}°C</Text>
            </View>

            <View style style={styles.weatherdaily}>
                <Text style = {styles.textPrimary}>Wetter Morgen</Text>
                <Image style={styles.weatherIcon} source={{ uri: tomorrow_iconUrl }} />
                <Text style = {styles.textPrimary}>{weather_forecast.weather_info}</Text>
                <Text style={styles.textPrimary}>{weather_forecast.temp}°C</Text>
            </View>
        </View>           
    );
    
}

const styles = StyleSheet.create({
    weatherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    weatherdaily: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 20,
        color: '#4b6082',
    },
    texSecondary: {
        fontSize: 20,
        color: '#4b6082',
        fontWeight: '500',
        marginTop: 10,
    },
})