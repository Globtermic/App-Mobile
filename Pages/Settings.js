import { Button, StyleSheet, Text, View, useColorScheme, Modal } from 'react-native';
import { PageStyle } from '../Styles';
import { useTranslation } from 'react-i18next';
import Selector from '../Components/LanguageSelector';

export default function Settings() {
    const {t, i18n} = useTranslation();
    return (
        <View>
            <Text style = {PageStyle.text}>Welcome to Settings page!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => navigation.navigate('News')}
            />
           <Selector/>
        </View>
    )
}