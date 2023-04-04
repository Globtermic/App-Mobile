import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeBaseProvider, Box } from 'native-base';
import HomePage  from './Pages/Homepage';
import Settings from './Pages/Settings';
import News  from './Pages/News';
import Houses from './Pages/House';
import {NavBar} from './Components/NavBar'


const Stack = createNativeStackNavigator();

export default function App() {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name = "Settings" 
          component={Settings}
          options={{title: 'Settings', headerShown: false }}
        />
        <Stack.Screen
          name = "Houses" 
          component={Houses}
          options={{title: 'Houses', headerShown: false }}
        />
        <Stack.Screen
          name = "News" 
          component={News}
          options={{title: 'News', headerShown: false }}
        />
      </Stack.Navigator>
      <NavBar/>
    {/* <View style= {isDarkTheme ? Lightstyles.container : Darkstyles.container} > */}
      {/* <Text style={isDarkTheme ? Lightstyles.text : Darkstyles.text}>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    {/* </View> */}
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const Lightstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  }
});

const Darkstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
})