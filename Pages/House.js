import { Dimensions, Text, TouchableOpacity, ImageBackground, Button} from 'react-native';
import {Box,ScrollView, NativeBaseProvider, View, Image} from 'native-base';
import { PageStyle } from '../Styles';
import { useTranslation } from 'react-i18next';
import { useContext, useState, createContext } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 30;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const escenciaHouse = [
    {
        id: 1,
        url: require('../assets/Escencia/vueFace.png')
    },
    {
        id: 2,
        url: require("../assets/Escencia/vueDessus.png"),
    },
    {
        id: 3,
        url: require("../assets/Escencia/vueContrePlongee.png"),
    },
    {
        id: 4,
        url: require("../assets/Escencia/vueAerienne.png"),
    },
    {
        id: 5,
        url: require("../assets/Escencia/vue3.png"),
    },
    {
        id: 6,
        url: require("../assets/Escencia/portrait2.png"),
    },
    {
        id: 7,
        url: require("../assets/Escencia/portrait1.png"),
    },
    {
        id: 8,
        url: require("../assets/Escencia/interieur2.png"),
    },
    {id: 9, url: require("../assets/Escencia/interieur1.png"),},
    {id: 10, url: require("../assets/Escencia/coupeHaut.png"),}
];

const renderItem = ({item}) => {
    return <Image
        source= {item.url} alt="HOUSE" style={{width: 400, height: 400}}/>
}

function Gallery() {
    return <View>
        <Carousel
        firstItem={1}
        layout='tinder'
        data={escenciaHouse} 
        renderItem={renderItem} 
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        containerCustomStyle={{overflow:'visible'}}
        contentContainerCustomStyle={{overflow:'visible'}}
        />
    </View>
}

const HouseContext = createContext(null);

function HousesHousesPage () {
    const {t, i18n} = useTranslation();
    const {houseToken, sethouseToken} = useContext(HouseContext);
    // return <View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
        return<Gallery/> //<Gallery/> {/* <Text>{t('house:houses')}</Text> */}
        // <Button color= 'black' title={t('house:goBack')} onPress={() => sethouseToken("MAIN")} />
    // </View>
}

function HousesExtensionsPage () {
    const {t, i18n} = useTranslation();
    const {houseToken, sethouseToken} = useContext(HouseContext);
    return <View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
        <Text>{t('house:extensions')}</Text>
        <Button color= 'black' title={t('house:goBack')} onPress={() => sethouseToken("MAIN")} />
    </View>
}

function HousesOfficesPage () {
    const {t, i18n} = useTranslation();
    const {houseToken, sethouseToken} = useContext(HouseContext);
    return <View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
        <Text>{t('house:offices')}</Text>
        <Button color= 'black' title={t('house:goBack')} onPress={() => sethouseToken("MAIN")} />
    </View>
}

function HousesMainPage () {
    const {houseToken, sethouseToken} = useContext(HouseContext);
    const deviceHeight = Dimensions.get("screen").height;
    const deviceWidth = Dimensions.get("screen").width;
    const divHeight = deviceHeight / 4;
    const {t, i18n} = useTranslation();

    return (
        <NativeBaseProvider>
        <Box alignItems="center" safeAreaTop p="4" justifyContent="center" >
            <TouchableOpacity onPress={()=> {sethouseToken("HOUSES")}} >
                <ImageBackground source={require('../assets/Escencia/portrait1.png')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
                    <Text style={{color:"white", fontSize:30}}>{t('house:houses')}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {sethouseToken("EXTENSIONS")}} >
                <ImageBackground source={require('../assets/Escencia/portrait1.png')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
                    <Text style={{color:"white", fontSize:30}}>{t('house:extensions')}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {sethouseToken("OFFICES")}} >
                <ImageBackground source={require('../assets/Escencia/portrait1.png')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
                    <Text style={{color:"white", fontSize:30}}>{t('house:offices')}</Text>
                </ImageBackground>
            </TouchableOpacity>
            </Box>
            </NativeBaseProvider>
    )
}

function PageChoice ({houseToken}) {
    if (houseToken === "MAIN") {
        return < HousesMainPage/>
    }
    else if (houseToken === "HOUSES") {
        return <HousesHousesPage/>
    }
    else if (houseToken === "EXTENSIONS") {
        return <HousesExtensionsPage/>
    }
    return <HousesOfficesPage />
}

export default function Houses ({navigation}) {
    const [houseToken, sethouseToken] = useState("MAIN");
    return <HouseContext.Provider value ={{houseToken, sethouseToken}}>
        <PageChoice houseToken={houseToken}/>
    </HouseContext.Provider>
}