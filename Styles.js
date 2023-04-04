import { StyleSheet } from 'react-native'

export const PageStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#000',
    }
});

export const NavBarStyle = StyleSheet.create({
    pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center'
    }
})