import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    label: {
        color: '#AB47BC',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input:{
        fontSize: 14,
        padding: 10,
        width: '90%',
        borderBottomColor: '#AB47BC',
        borderBottomWidth: 2,
        marginHorizontal: 10
    },
    inLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputTextArea:{
        fontSize: 14,
        padding: 10,
        width: '90%',
        borderColor: '#AB47BC',
        borderWidth: 2,
        marginHorizontal: 10,
        borderRadius: 10,
        height: 70,
        textAlignVertical: 'top'
    },
    inputInLine:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    switchLabel:{
        fontWeight: 'bold',
        color:  '#AB47BC',
        textTransform: 'uppercase',
        fontSize: 16
    },
    trashImage: {
        marginHorizontal: 10
    },
    textRemove:{
        fontWeight: 'bold',
        color:  '#F50B0B',
        textTransform: 'uppercase',
        fontSize: 16,
        marginEnd: 10
    },
    typeIconInative:{
        opacity: 0.5
    }
})

export default styles