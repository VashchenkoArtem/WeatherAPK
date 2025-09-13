import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingTop:55,
    gap: 5
  },
  cityContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    gap: 5
  },
  mayakImage: {
    width: 37,
    height:37
  },
  currentWeatherContainer: {
    width: 363,
    height: 168,
    flexDirection: "row",
    gap: 35
  },
  currentWeatherBody: {
    width: 152,
    height: 163
  },
  currentTemp: {
    color: "white",
    fontSize: 64
  },
  currentWeather: {
    color: "#D1D4D8",
    fontSize:24,
  },
  feelsLike: {
    fontSize: 15,
    color: "#A6B7CE"
  },
  currentMaxAndMinTemp: {
    color: "#94A1B2",
    fontSize: 15
  },
  imageCurrentWeather: {
    width: 141,
    height: 130
  },
  hourlyWeatherContainer: {
    width: 343,
    height: 90,
  
  },
  image: {
    width: 50,
    height: 50
  },
  oneHour: {
    alignItems: "center"
  },
  cityName: {
    fontSize:40,
    textAlign: "center",
    color: "white"
  },
  currentCityTemp: {
    fontSize: 40,
    color: "#373737ff"
  },
  currentWeatherDescription: {
    fontSize: 15,
    color: "#4e576cff"
  },
  currentWeatherImage: {
    width:150,
    height:150,
  },
  goBack: {
    textDecorationLine: 'underline',
    fontSize: 15,
    color: "#aabbbfff"
  },
  futureHoursContainer: {
    backgroundColor: "#a4bcf34e",
    padding: 10,
    borderRadius: 10
  },
  oneDayContainer: {
    flexDirection: "row",
    gap: 130
  },
  weekDay: {
    width: 100,
    fontSize: 20,
    color: "#373737ff"
  },
  scrollFutureDays: {
    gap: 10
  },
  imageFutureDays: {
    width:30,
    height:30
  },
  imageWithTemp: {
    flexDirection: "row",
    gap: 20,
    alignItems: 'center'
  }

}); 