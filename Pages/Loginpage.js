import { PageStyle } from '../Styles';
import {Box, Heading, VStack, FormControl, Button, Input, NativeBaseProvider, Center, Bottom, Stack} from 'native-base';
import {View, Text, Image, ImageBackground} from 'react-native';
import { useContext} from 'react';
import { Context } from '../Token';
import { TextInput } from '../Components/TextInput';

function RegisterBox() {
    const {token, setToken} = useContext(Context);
    return  <View style={{position:"absolute", bottom:0, width:"100%"}} >
    <Box safeArea p="6" w="100%" position="relative" bgColor="#558F36" borderTopRadius={30}>
        <Center>
        <Heading size="lg" color="white"  _dark={{
        color: "white"
        }} fontWeight="medium">
            Welcome
        </Heading>
        </Center>
        <Center>
        <Heading mt="1" color="white" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            Sign up to continue!
        </Heading>
        </Center>
        <VStack space={3} mt="5">
        <TextInput name="Email" textColor="white"/>
        <TextInput name="Password" textColor="white" type="password"/>
        <TextInput name="Confirm Password" textColor="white" type="password"/>
        <View>
        <Stack direction="row" alignItems="center" flex={1}space={10} mx={{
        base: "auto",
        md: "0"
      }}>
            <Button bgColor="white" onPress={() => {setToken("TEST")}} shadow={6} borderRadius={15}>
                <Image source={require('../assets/google.png')} style={{flex:1, resizeMode: 'center', width: 40, height: 40}} />
            </Button>
            <Button bgColor="white" onPress={() => {setToken("TEST")}} shadow={6} borderRadius={15}>
                <Image source={require('../assets/Instagram.png')} style={{flex:1, resizeMode: 'center', width: 40, height: 40}} />
            </Button>
        </Stack>
        </View>
        <Button bgColor='transparent' borderColor='white' borderWidth={2}
                onPress={() => {setToken("TEST")}}
                borderRadius={30}
                _text={{
                    color: "white",
                    bold: true
                }}
                >
                    REGISTER
            </Button>
        </VStack>
    </Box>
    </View>;
}



export default function Loginpage(){
    
    return (
        <NativeBaseProvider>
            <ImageBackground source={require('../assets/maison.jpg')} style={{flex: 1, width:"100%", resizeMode: 'cover'}} blurRadius={5}>
            <Center safeAreaTop>
            <Image source={require('../assets/logo.png')} />
            </Center>
            </ImageBackground>

            <RegisterBox/>
        </NativeBaseProvider>
    )
}