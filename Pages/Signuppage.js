import { NativeBaseProvider, Box, Center, Heading, FormControl, Input, Button, View} from "native-base";
import { ScrollView, Text} from "react-native";
import { Context } from "../Token";
import { MyInput } from '../Components/MyInput';
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SignupPage() {
    const {token, setToken} = useContext(Context);
    const [bday, setBday] = useState("");
    const {t, i18n} = useTranslation();
    return <NativeBaseProvider>
        <ScrollView>
            <Box safeArea p="6" w="100%" position="relative" bgColor="white">
                <Center>
        <Heading size="lg" color="#193E05"  _dark={{
        color: "white"
        }} fontWeight="medium">
            {t('signuppage:welcome')}
        </Heading>
        </Center>
        <Center>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            {t('signuppage:signupto')}
        </Heading>
        </Center>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:fullName')}
                </Text>
            </FormControl.Label>
            <Input borderRadius={15} placeholder="Enter name"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:email')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="example@gmail.com"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:datebirth')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} 
            borderRadius={15} 
            placeholder="DD / MM / YYYY"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:civility')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Enter civility"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:phoneNumber')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="+33 1 23 45 67 89" inputMode="tel"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:password')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Enter password"/>
        </FormControl>
        <FormControl>
            <FormControl.Label isRequired="true">
                <Text style={{color: "#193E05"}}>
                {t('signuppage:confirmPassword')}
                </Text>
            </FormControl.Label>
            <Input borderWidth={1} borderRadius={15} placeholder="Confirm password"/>
        </FormControl>
        <View height={15}/>
        <Button bgColor='transparent' borderColor='#193E05' borderWidth={2}
                onPress={() => {setToken("IN")}}
                borderRadius={30}
                _text={{
                    color: "#193E05",
                    bold: true
                }}
                >
                    {t('signuppage:signUp')}
            </Button>
        <View height={15}/>
        <Center>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="light" size="xs">
            {t('signuppage:alreadyAccount')}?
        </Heading>
        <Button bgColor="white" onPress={() => {setToken("LOGIN")}}>
        <Heading mt="1" color="#193E05" _dark={{
        color: "warmGray.200"
        }} fontWeight="bold" size="xs" underline="true">
            {t('signuppage:signIn')}
        </Heading>
        </Button>
        </Center>
            </Box>
        </ScrollView>
    </NativeBaseProvider>
}