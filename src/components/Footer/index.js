import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './style'

import add from '../../assets/icons/add.png'
import save from '../../assets/icons/save.png'

export default function Footer({ icon, onPress }) {
    return (
        <View style={styles.conteiner}>
            <TouchableOpacity  style={styles.button} onPress={onPress}>
                <Image source={icon === 'add' ? add : save} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>Colocando a vida em ordem</Text>
        </View>
    )
}