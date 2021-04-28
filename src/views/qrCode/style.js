import { StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#424242',
        borderBottomColor: '#AB47BC',
        borderBottomWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    containerButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70,
    },
    buttonBack: {
        backgroundColor: '#AB47BC',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    buttonScan: {
        backgroundColor: '#fff',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        color: '#AB47BC',
        fontWeight: 'bold',
        fontSize: 12,
    }

});

export default styles;