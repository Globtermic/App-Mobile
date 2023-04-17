import {Box, Heading, VStack, Button,  NativeBaseProvider, Center, Stack} from 'native-base';
import {View, Image, ImageBackground} from 'react-native';
import { useContext} from 'react';
import { Context } from '../Token';
import { MyInput } from '../Components/MyInput';

function RegisterBox() {
    const {token, setToken} = useContext(Context);
    return  <View style={{position: "absolute", bottom:5, width:"100%"}}>
    <Box safeArea p="6" w="100%" position="relative" bgColor="white" borderTopRadius={30}>
        <Center>
        <Heading size="lg" color="#193E05"  _dark={{
        color: "white"
        }} fontWeight="medium">
            Welcome Back
        </Heading>
        </Center>
        <Center>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            Sign in to continue!
        </Heading>
        </Center>
        <VStack space={3} mt="5">
        <MyInput name="Email" textColor="#193E05"/>
        <MyInput name="Password" textColor="#193E05" type="password"/>
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
        <Button bgColor='transparent' borderColor='#193E05' borderWidth={2}
                onPress={() => {setToken("TEST")}}
                borderRadius={30}
                _text={{
                    color: "#193E05",
                    bold: true
                }}
                >
                    LOGIN
            </Button>
        </VStack>
        <Center>
        <View style={{height: 15}}>

        </View>
        
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            You don't have an account ?
        </Heading>
        <Button bgColor="white" onPress={() => {setToken("SIGNUP")}}>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="bold" size="xs" underline="true">
            Sign up
        </Heading>
        </Button>
        </Center>
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