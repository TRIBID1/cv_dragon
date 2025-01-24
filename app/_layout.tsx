import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import {useFonts} from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Manrope-ExtraLight" : require("../assets/fonts/Manrope-ExtraLight.ttf"),
    "Manrope-Light" : require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular" : require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium" : require("../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold" : require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold" : require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold" : require("../assets/fonts/Manrope-ExtraBold.ttf"),
  })

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer>
    //   <Drawer.Screen
    //       name="index" // This is the name of the page and must match the url from root
    //       options={{
    //         drawerLabel: 'abcd',
    //         title: 'overview',
    //       }}
    //     />
    //   </Drawer>
    // </GestureHandlerRootView>
       <Stack screenOptions={{ headerShown: false }}/>
)
}
