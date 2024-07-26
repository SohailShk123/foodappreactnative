import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
    footerContainer :{
        height : 60,
        backgroundColor : 'white',
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        zIndex : 10,
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    icon: {
        height: 24,
        width: 24,
        // tintColor: "#333",
      },
})