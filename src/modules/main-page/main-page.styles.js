import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  backImage: {
    flex: 1
  },
  congratulations: {
    fontSize: 35,
    textAlign: 'center',
    color: "#373737ff",
    marginTop: 200
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    gap: 20
  },
  chooseButtonTitle: {
    color: "#373737ff",
  },
  inputsContainer: {
    gap: 10
  },
  notOpenPicker: {
    width: 350,
    zIndex: 0
  },
  defaultDropDowmPicker: {
    width: 350,
    zIndex: 0
  },
  containerStyleCountry: {
    width: 350,
    zIndex: 100,
  },
    containerStyleCity: {
    width: 350,
    zIndex: 10,
  },
  buttonNext: {
    fontSize: 25,
    color: "#373737ff",
    fontWeight: "bold"
  }

})