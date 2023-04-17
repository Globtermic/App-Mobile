import { NativeBaseProvider, Box, Center, Heading, FormControl, Input, Button, View} from "native-base";
import { ScrollView, Text} from "react-native";
import { Context } from "../Token";
import { MyInput } from '../Components/MyInput';
import { useContext, useEffect, useState } from "react";

export default function SignupPage() {
    const {token, setToken} = useContext(Context);
    const [bday, setBday] = useState("");
    return <NativeBaseProvider>
        <ScrollView>
            <Box safeArea p="6" w="100%" position="relative" bgColor="white">
                <Center>
        <Heading size="lg" color="#193E05"  _dark={{
        color: "white"
        }} fontWeight="medium">
            Welcome
        </Heading>
        </Center>
        <Center>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            Sign in to continue!
        </Heading>
        </Center>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Full Name
                </Text>
            </FormControl.Label>
            <Input borderRadius={15} placeholder="Enter name"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Email
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="example@gmail.com"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Date of birth
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} 
            borderRadius={15} 
            placeholder="DD / MM / YYYY"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Civility
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Enter civility"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Phone number
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="+33 1 23 45 67 89" inputMode="tel"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Password
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Enter password"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                Confirm Password
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Confirm password"/>
        </FormControl>
        <View height={15}/>
        <Button bgColor='transparent' borderColor='#193E05' borderWidth={2}
                onPress={() => {setToken("TEST")}}
                borderRadius={30}
                _text={{
                    color: "#193E05",
                    bold: true
                }}
                >
                    SIGN UP
            </Button>
        <View height={15}/>
        <Center>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            You already have an account ?
        </Heading>
        <Button bgColor="white" onPress={() => {setToken("")}}>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="bold" size="xs" underline="true">
            Sign in
        </Heading>
        </Button>
        </Center>
            </Box>
        </ScrollView>
    </NativeBaseProvider>
}