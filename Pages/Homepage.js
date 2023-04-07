import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';
import { useContext } from 'react';
import { Context } from '../Token';

export default function HomePage ({navigation}) {
    const {token, setToken} = useContext(Context);

    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>Welcome to Globtermic app!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => setToken("")}
            /*onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})}*/
            />
        </View>
    )
}