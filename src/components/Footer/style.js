import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: 70,
        backgroundColor: '#AB47BC',
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#424242',
        alignItems: 'center',


    },
    button:{
        position: 'relative',
        top: -40
    },
    image:{
        width: 75,
        height: 75
    },
    text: {
        position: 'relative',
        top: -35,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default styles