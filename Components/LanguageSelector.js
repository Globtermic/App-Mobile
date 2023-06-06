import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Row} from 'native-base';
import { Image } from 'react-native';
import { Context } from '../Token';
import { useContext } from 'react';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Espagnol' }
  ];

  function Selector({key}) {
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;
    const {token, setToken} = useContext(Context);
  
    const setLanguage = code => {
      if (token === "") {
        setToken("LOGIN");
      }
      return i18n.changeLanguage(code);
    };
  
    return (
      <View style={styles.container}>
        <Row>
        <Button bgColor='white' onPress={() => setLanguage('fr')}>
          <Image source={require('../assets/Flags/France.png')} style={{ resizeMode: 'center', width: 40, height: 40}}></Image>
        </Button>
        <Button bgColor='white' onPress={() => setLanguage('en')}>
          <Image source={require('../assets/Flags/Uk.png')} style={{ resizeMode: 'center', width: 40, height: 40}}></Image>
        </Button>
        <Button bgColor='white' onPress={() => setLanguage('es')}>
          <Image source={require('../assets/Flags/Spain.png')} style={{ resizeMode: 'center', width: 40, height: 40}}></Image>
        </Button>
        </Row>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      paddingHorizontal: 16
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      color: '#444',
      fontSize: 28,
      fontWeight: '600'
    },
    buttonContainer: {
      marginTop: 10
    },
    text: {
      fontSize: 18,
      color: '#000',
      paddingVertical: 4
    },
    selectedText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'tomato',
      paddingVertical: 4
    }
  });
  
  export default Selector;