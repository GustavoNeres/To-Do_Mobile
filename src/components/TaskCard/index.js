import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'

import { format } from 'date-fns'

import typeIcons from '../../utils/typeIcons'

export default function TaskCard({title, when, type}){
    return (
        <TouchableOpacity style={styles.card}>
            <View  style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View  style={styles.cardRight}>
                <Text style={styles.date}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.hours}>{format(new Date(when), 'HH:mm')}</Text>
                </View>
        </TouchableOpacity>
    )
}
