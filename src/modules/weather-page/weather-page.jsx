import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react"
import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from "react-native"
import { ScrollView, capitalizeFirstLetter } from "react-native";
import { styles } from "./weather-page.styles"


export function WeatherPage(){
    const params = useLocalSearchParams()
    const [weatherData, setWeatherData] = useState()
    const [futureTimeHours, setFutureTimeHours] = useState([])
    const [futureTimeDays, setFutureTimeDays] = useState([])
    function goBack(){
        router.back()
    }
    function capitalizeFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    useEffect(() => {
        async function getWeather(){
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&lang=uk&units=metric&appid=9a0dc8636334e30072a66a0c9271af8f`)
                const result = await response.json()  
                setWeatherData(result)
                const futureHours = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&units=metric&appid=9a0dc8636334e30072a66a0c9271af8f`)
                const resultFutureHours = await futureHours.json()
                const futureWeatherHours = resultFutureHours.list.slice(0, 9)
                setFutureTimeHours(futureWeatherHours)
                const futureDaysResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.cityName}?key=2VSHWA58AFYBZHQ3PLKYEQ4FG&unitGroup=metric`)
                const futureDaysJson = await futureDaysResponse.json()
                const futureDays = futureDaysJson.days.slice(0, 7)
                setFutureTimeDays(futureDays)
            }catch(error){
                console.log(error)
            }
            }
        getWeather()
    }, [])

    
    return(
        <View style = {styles.container}>
            <View style = {styles.cityContainer}>
                <Image source = {require("../../shared/images/mayak.png")} style = {styles.mayakImage}/>
                <Text style = {styles.cityName}>Dnipro</Text>
            </View>
            <View style = {styles.currentWeatherContainer}>
                <View style = {styles.currentWeatherBody}>
                    <Text style = {styles.currentTemp}>29°</Text>
                    <Text style = {styles.currentWeather}>Mostly cloud</Text>
                    <Text style = {styles.feelsLike}>Feels like 27°</Text>
                    <Text style = {styles.currentMaxAndMinTemp}>22°↓ 31°↑</Text>
                </View>
                <Image style ={styles.imageCurrentWeather} source = {require("../../shared/images/example_weather.png")}></Image>
            </View>
            <ImageBackground style = {styles.hourlyWeatherContainer} source = {require("../../shared/images/backgrHourly.png")}>

            </ImageBackground>
            <View style = {styles.weeklyWeatherContainer}>

            </View>
            <View style = {styles.sunriseContainer}>
                <Text>Sunrise</Text>
                <Image style = {styles.sunImage} source = {require("../../shared/images/sunrise.png")}/>
                <Text style = {styles.timeSun}>05:55</Text>
            </View>
            <View style = {styles.sunsetContainer}>
                <Text style = {styles.sunsetText}>Sunset</Text>
                <Image style = {styles.sunImage} source = {require("../../shared/images/sunset.png")}/>
                <Text style  = {styles.timeSun}>21:55</Text>
            </View>
            {/* <View style = {styles.cityContainer}>
                <Text style = {styles.cityName}>{params.cityName}</Text>
                <Text style = {styles.currentCityTemp}>{Math.round(weatherData?.main.temp)}°C</Text>
                <Image style = {styles.currentWeatherImage} source = {{
                    uri: `https://raw.githubusercontent.com/VashchenkoArtem/Weather-Icons/refs/heads/main/${weatherData?.weather[0].icon}.png`
                }
                }></Image>
                
            </View>
            <View style = {styles.futureHoursContainer}>
                <Text style = {styles.currentWeatherDescription}>{capitalizeFirstLetter(weatherData?.weather[0].description)}. Відчувається як {Math.round(weatherData?.main.feels_like)}°C</Text>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                    {futureTimeHours.map((oneTimeHour)=>{
                        return (
                            <View key = {oneTimeHour.dt} style = {styles.oneHour}>
                                <Text>{new Date(oneTimeHour.dt_txt).getHours()}:00</Text>
                                <Image style = { styles.image } source = {{
                                    uri: `https://raw.githubusercontent.com/VashchenkoArtem/Weather-Icons/refs/heads/main/${oneTimeHour.weather[0].icon}.png`}}
                                    />
                                <Text>{Math.round(oneTimeHour.main.temp)}°C</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <ScrollView style = {styles.scrollFutureDays}>
                {futureTimeDays.map((oneDay)=>{
                    return(
                        <View key = {oneDay.datetime} style = {styles.oneDayContainer}>
                            <Text style = {styles.weekDay}>{capitalizeFirstLetter(new Date(oneDay.datetime).toLocaleString("uk-UA", {
                                weekday: 'long'
                            }))}</Text>
                            <View style = {styles.imageWithTemp}>
                                <Image style = {styles.imageFutureDays} source = {{
                                    uri: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/3rd%20Set%20-%20Color/${oneDay.icon}.png`
                                }} />    
                                <Text style = {styles.temperatureFutureDays}>{Math.round(oneDay.tempmax)}°C↑  {Math.round(oneDay.tempmin)}°C↓</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView> */}
        </View>
    )
}
