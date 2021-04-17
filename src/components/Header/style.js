import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#424242',
        borderBottomColor: '#AB47BC',
        borderBottomWidth: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 60,
        height: 60,
    },
    notification: {
        position: 'absolute',
        right: 20
    },
    notificationImage: {
        width: 20,
        height: 25
    },
    circle: {
        backgroundColor: '#AB47BC',
        borderRadius: 50,
        position: 'absolute',
        top: -5,
        left: 13,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    qrCode:{
        position: 'absolute',
        left: 20
    },
    qrCodeImage: {
        width: 20,
        height: 20,
    }

});

export default styles