import { Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {Box, Center, Button, Image, ScrollView, NativeBaseProvider, View} from 'native-base';
import { PageStyle } from '../Styles';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useTranslation } from 'react-i18next';

const images = [{
    url: '',
    props: {
        source: require('../assets/Escencia/vue3.jpg')
    }
}]

export default function Houses ({navigation}) {
    const deviceHeight = Dimensions.get("screen").height;
    const deviceWidth = Dimensions.get("screen").width;
    const divHeight = deviceHeight / 4;
    const {t, i18n} = useTranslation();

    return (
        <NativeBaseProvider>
        <ScrollView>
        <Box alignItems="center" safeAreaTop p="4" justifyContent="center" >
            <TouchableOpacity  >
                <ImageBackground source={require('../assets/Escencia/vue3.jpg')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth, height:divHeight, justifyContent:'center', alignItems:'center'}} >
                    <Text style={{color:"white"}}>{t('house:houses')}</Text>
                </ImageBackground>
            </TouchableOpacity>
             {/* <Button bgColor="transparent" onPress={() => {}} style={{justifyContent:'center'}} >
                <Box>
                <Image source={require('../assets/Escencia/vue3.jpg')} borderRadius={15} alt='alignItems' size="2xl" width={deviceWidth} height={deviceHeight / 4} blurRadius={5} />
                <Text>{t('house:houses')}</Text>
                </Box>
            </Button> */}
            </Box>
            </ScrollView>
            </NativeBaseProvider>
    )
}