import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

//Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createNativeStackNavigator();

const InitialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='ImageScreen'
          component={ImageScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='ResultScreen'
          component={ResultScreen}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  )
}

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  })


  useEffect(() => {
    async function hideSpalshScreen() {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      hideSpalshScreen();
    }
    
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  )
}

export default App