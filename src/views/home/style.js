import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70

    },
    filterTextActive: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#AB47BC'
    },
    filterTextInative: {
        color: '#424242',
        fontSize: 13,
        fontWeight: 'bold',
    },
    content: {
        width: '100%',
        marginTop: 20
    },
    title:{
        width: '100%',
        borderBottomColor: '#707070',
        borderBottomWidth: 2,
        alignItems: 'center',
        marginBottom: 10
    },
    titleText:{
        color: '#424242',
        position: 'relative',
        top:9,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        fontWeight: 'bold'
    }
});

export default styles