import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MainPage } from '../modules/main-page/main-page';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../modules/main-page/main-page';
import { styles } from "../modules/main-page/main-page.styles"

export default function App() {
  return (
    <ImageBackground style = {styles.backImage} source = {require("../shared/images/backgr.png")} >
        <SafeAreaView>
            <MainPage></MainPage>
        </SafeAreaView>
    </ImageBackground>
  );
}