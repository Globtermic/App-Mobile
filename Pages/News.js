import {  Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { PageStyle } from '../Styles';

export default function News ({navigation}){
    return (
        <View style = {PageStyle.container}>
            <Text style = {PageStyle.text}>Welcome to News Page!</Text>
            <Button
            color= 'black'
            title='Go Back'
            onPress={() => navigation.navigate('Houses')}
            /*onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})}*/
            />
        </View>
    )
}