import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';

export default function HomePage ({navigation}) {
    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>Welcome to Globtermic app!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => navigation.navigate('Settings')}
            /*onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})}*/
            />
        </View>
    )
}