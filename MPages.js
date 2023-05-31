import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeBaseProvider} from 'native-base';
import HomePage  from './Pages/Homepage';
import Settings from './Pages/Settings';
import News  from './Pages/News';
import Houses from './Pages/House';
import {NavBar} from './Components/NavBar'

const Stack = createNativeStackNavigator();

export default function MPages() {

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
             </NativeBaseProvider>   
        </NavigationContainer>
    
  );
}