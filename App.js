import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Context } from './Token';
import { useState } from 'react';
import SignupPage from './Pages/Signuppage';

import MPages from './MPages';
import Loginpage from './Pages/Loginpage';
import './IMLocalize';
import Selector from './Components/LanguageSelector';

function NextPage({token}) {
    if (token === 'SIGNUP') {
      return <SignupPage/>
    }
    else if (token == 'LOGIN') {
      return <Loginpage/>
    }
    return <MPages/>
}
  
export default function App() {
  const theme = useColorScheme();
  const [token, setToken] = useState("");

  return (<Context.Provider value ={{token, setToken}}>
    <NativeBaseProvider>
    {token? <NextPage token={token}/> :<Selector key={"START"} />}
    </NativeBaseProvider>
    </Context.Provider>
    );
  
}