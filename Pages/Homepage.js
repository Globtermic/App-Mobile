import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';
import { useContext } from 'react';
import { Context } from '../Tools/Token';
import { useTranslation } from 'react-i18next';
import Selector from '../Components/LanguageSelector';
import { Box, IconButton, Icon, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings';

export default function HomePage ({navigation}) {
    const {token, setToken} = useContext(Context);
    const {t, i18n} = useTranslation();

    return (
        <View style={{flex:1, backgroundColor:"white"}}>
            <Box safeAreaTop>
            <IconButton alignSelf="flex-end" color="black" icon={<Icon color="black" as={<Ionicons name="settings-outline" size={24} color="black" />} />} >

            </IconButton>
            </Box>
        <View style = {PageStyle.container}>
            
            <Text style = {PageStyle.text}>{t('homepage:bienvenue')}</Text>
            <Selector/>
            <Button
            bgColor= 'black'
            onPress={() => setToken("LOGIN")}
            >Go back</Button>
        </View>
        </View>
    )
}