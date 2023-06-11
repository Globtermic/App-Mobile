import { Dimensions, Text, TouchableOpacity, ImageBackground, Button} from 'react-native';
import {Box,ScrollView, NativeBaseProvider, View} from 'native-base';
import { PageStyle } from '../Styles';
import { useTranslation } from 'react-i18next';
import { useContext, useState, createContext } from 'react';

const HouseContext = createContext(null);

function HousesHousesPage () {
    const {t, i18n} = useTranslation();
    const {houseToken, sethouseToken} = useContext(HouseContext);
    return <View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
        <Text>{t('house:houses')}</Text>
        <Button color= 'black' title={t('house:goBack')} onPress={() => sethouseToken("MAIN")} />
    </View>
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
                <ImageBackground source={require('../assets/Escencia/portrait1.jpg')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
                    <Text style={{color:"white", fontSize:30}}>{t('house:houses')}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {sethouseToken("EXTENSIONS")}} >
                <ImageBackground source={require('../assets/Escencia/portrait1.jpg')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
                    <Text style={{color:"white", fontSize:30}}>{t('house:extensions')}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {sethouseToken("OFFICES")}} >
                <ImageBackground source={require('../assets/Escencia/portrait1.jpg')} borderRadius={15} blurRadius={5} style={{ width:deviceWidth - 10, height:divHeight, justifyContent:'center', alignItems:'center', marginBottom: 20}} >
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