import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';
import { useTranslation } from 'react-i18next';
import Selector from '../Components/LanguageSelector';

export default function Settings({navigation}) {
    const {t, i18n} = useTranslation();
    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>Welcome to Settings page!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => navigation.navigate('News')}
            />
²           <Selector/>
        </View>
    )
}