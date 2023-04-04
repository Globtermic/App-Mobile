import React, { useState } from 'react'
import { Box, HStack, Text} from 'native-base'
import { Pressable, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { NavBarStyle } from '../Styles';
import { useNavigation } from '@react-navigation/native';


export function NavBar() {
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState(1);
    return <>
        <Box flex={0} bg="blue" safeAreaBottom width= "100%" alignSelf= 'center'>
          <HStack bg="white" alignItems="center" safeAreaBottom shadow={9}>
          <Pressable style={NavBarStyle.pressable}
            cursor="pointer" 
            opacity={selected === 0 ? 1 : 0.5}
            py="3" 
            flex={1} 
            onPress={() => {navigation.navigate('Houses'); setSelected(0)}}>
            <MaterialCommunityIcons name='home-account'  size={30}/>
              <Text color="black" fontSize="12">
                My House
              </Text>
          </Pressable>
          <Pressable style={NavBarStyle.pressable} 
            cursor="pointer" 
            opacity={selected === 1 ? 1 : 0.5} 
            py="3" 
            flex={0} 
            onPress={() => {navigation.navigate('Home'); setSelected(1)}}>
            <MaterialCommunityIcons name='home' size={30}/>
              <Text color="black" fontSize="12">
                Home
              </Text>
          </Pressable>
          <Pressable style={NavBarStyle.pressable} 
            cursor="pointer" 
            opacity={selected === 2 ? 1 : 0.5} 
            py="3" flex={0} 
            onPress={() => {navigation.navigate('News'); setSelected(2)}}>
            <MaterialCommunityIcons name='newspaper' size={30}/>
              <Text color="black" fontSize="12">
                News
              </Text>
          </Pressable>
          </HStack>
        </Box>
        </>;
}