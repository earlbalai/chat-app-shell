import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context"

//Screens
import { Walkthrough, Verification, ProfileAccount, PhoneNumber, PersonalChat } from "./screens"
import BottomTabNavigation from './navigation/BottomTabNavigation'
import { useCallback } from "react"

//SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Mulish-Black.ttf'),
    regular: require('./assets/fonts/Mulish-Regular.ttf'),
    bold: require('./assets/fonts/Mulish-Bold.ttf'),
    medium: require('./assets/fonts/Mulish-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Mulish-MediumItalic.ttf'),
    semiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
    semiBoldItalic: require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Walkthrough"
        >
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
          />

          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
          <Stack.Screen name="PersonalChat" component={PersonalChat} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
