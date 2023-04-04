import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';

export default function Settings({navigation}) {
    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>Welcome to Settings page!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => navigation.navigate('News')}
            /*onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})}*/
            />
        </View>
    )
}