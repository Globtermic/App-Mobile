import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';
import { useContext } from 'react';
import { Context } from '../Token';
import { useTranslation } from 'react-i18next';
import Selector from '../Components/LanguageSelector';

export default function HomePage ({navigation}) {
    const {token, setToken} = useContext(Context);
    const {t, i18n} = useTranslation();

    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>{t('homepage:bienvenue')}</Text>
            <Selector/>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => setToken("LOGIN")}
            />
        </View>
    )
}