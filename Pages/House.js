import {  Button, StyleSheet, Text, View, Image, useColorScheme, Modal } from 'react-native';
import {Box, Center } from 'native-base';
import { PageStyle } from '../Styles';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    url: '',
    props: {
        source: require('../assets/Escencia/vue3.jpg')
    }
}]

export default function Houses ({navigation}) {
    return (
        <View>
        <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={images}/>
            </Modal>
            </View>
    )
}