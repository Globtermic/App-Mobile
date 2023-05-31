import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Context } from './Token';
import { useState } from 'react';
import SignupPage from './Pages/Signuppage';

import MPages from './MPages';
import Loginpage from './Pages/Loginpage';
import './IMLocalize';


function NextPage({token}) {
    if (token === 'SIGNUP') {
      return <SignupPage/>
    }
    return <MPages/>
}
  
export default function App() {
  
  const theme = useColorScheme();
  const [token, setToken] = useState("");

  return (<Context.Provider value ={{token, setToken}}>
    {token? <NextPage token={token}/> :<Loginpage/>}
    </Context.Provider>
    );
}