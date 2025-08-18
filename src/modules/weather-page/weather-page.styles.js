import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    gap: 5
  },
  image: {
    width: 50,
    height: 50
  },
  oneHour: {
    alignItems: "center"
  },
  cityName: {
    fontSize:50,
    color: "#373737ff"
  },
  cityContainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: "center"
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