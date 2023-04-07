import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Context } from './Token';
import { useState } from 'react';

import MPages from './MPages';
import Loginpage from './Pages/Loginpage';

  
export default function App() {
  
  const theme = useColorScheme();
  const [token, setToken] = useState("");

  return (<Context.Provider value ={{token, setToken}}>
    {token?  <MPages/> :<Loginpage/>}
    </Context.Provider>
    );
}