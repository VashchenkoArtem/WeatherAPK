import { ImageBackground, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import "../modules/weather-page/weather-page"
import { WeatherPage } from '../modules/weather-page/weather-page';


export default function ShowWeather(){
    return (
    <ImageBackground style = {styles.backImage} source = {require("../shared/images/backgr.png")}>
        <SafeAreaView>
            <WeatherPage></WeatherPage>
        </SafeAreaView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImage:{
        flex: 1
    }
})