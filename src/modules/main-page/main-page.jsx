import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import DropDownPicker from "react-native-dropdown-picker";
import {router} from "expo-router"
import { styles } from "../main-page/main-page.styles"


export function MainPage(){
    const [openCountry, setOpenCountry] = useState(false)
    const [choosenCountry, setChoosenCountry] = useState()
    const [countryItems, setCountryItems] = useState([])
    const [openCity, setOpenCity] = useState(false)
    const [choosenCity, setChoosenCity] = useState()
    const [cityItems, setCityItems] = useState([])
    const toNextPage = () => {
        router.push({
            pathname: "/weather",
            params: {cityName: choosenCity}
        })
    }
    useEffect(() => {    
        async function getResponse(){
            try{
                const response = await fetch("https://countriesnow.space/api/v0.1/countries")
                const result = await response.json()
                const allCountries = result.data.map((countryData) => {
                    return {
                        label: countryData.country,
                        value: countryData.country,
                        data: countryData
                    }
                })
                setCountryItems(allCountries)
                
            }catch(error){
                console.log(error)
            }
        }
        getResponse()
    
    }, [])
    useEffect(() =>{
        if (choosenCountry){
            const correctCountry = countryItems.find((countryItem) => {
                return choosenCountry == countryItem.value
            })
            const correctCities = correctCountry.data.cities.map((cityName)=>{
                return {
                    label: cityName,
                    value: cityName
                }
            })
            setCityItems(correctCities)
        }


    }, [choosenCountry])
    return(
        <View style = {styles.mainContainer}>
            <Text style = {styles.congratulations}>Вітаємо!</Text>
            <Text style = {styles.chooseButtonTitle}>Будь ласка, оберіть вашу країну та місто</Text>
            <View style = {styles.inputsContainer}>
                <DropDownPicker
                    open = {openCountry}
                    value = {choosenCountry}
                    items = {countryItems}
                    setOpen = {setOpenCountry}
                    setValue = {setChoosenCountry}
                    setItems = {setCountryItems}
                    searchable = {true}
                    style = {choosenCountry? styles.defaultDropDowmPicker: styles.notOpenPicker} // До відкриття
                    dropDownContainerStyle = {styles.containerStyleCountry} // Випадаючий cписок
                    textStyle = {styles.textStyle} // Текст у полі вибора
                    searchContainerStyle = {styles.searchContainerStyle} // поля пошуку всередині списку
                    searchPlaceholderTextColor="white" // Колір
                    searchTextInputStyle = {styles.searchTextInputStyle} // Текстове поля пошуку
                    placeholder="Оберіть країну"
                />
                <DropDownPicker
                    open = {openCity}
                    value = {choosenCity}
                    items = {cityItems}
                    setOpen = {setOpenCity}
                    setValue = {setChoosenCity}
                    setItems = {setCityItems}
                    searchable = {true}
                    placeholder="Оберіть місто"
                    style = {choosenCountry? styles.defaultDropDowmPicker: styles.notOpenPicker} // До відкриття
                    dropDownContainerStyle = {styles.containerStyleCity} // Випадаючий cписок
                    textStyle = {styles.textStyle} // Текст у полі вибора
                    searchContainerStyle = {styles.searchContainerStyle} // поля пошуку всередині списку
                    searchPlaceholderTextColor="black" // Колір
                    searchPlaceholder="Пошук"
                    searchTextInputStyle = {styles.searchTextInputStyle} // Текстове поля пошуку
                />
            </View>
            <TouchableOpacity onPress={toNextPage} style = {styles.buttonNext}>
                <Text style = {styles.buttonNext}>Далі</Text>
            </TouchableOpacity>
        </View>
    )
}
