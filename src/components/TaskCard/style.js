import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        height: 80,
        backgroundColor: '#424242',
        borderRadius: 10,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width: 50,
        height: 50,
        marginEnd: 10
    },
    cardTitle:{
        
        color: '#AB47BC',
        fontWeight: 'bold',

    },
    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    date:{
        color: '#FAFAFA',
        fontWeight: 'bold',
    },
    hours: {
        color: '#FAFAFA'
    }

})



export default styles