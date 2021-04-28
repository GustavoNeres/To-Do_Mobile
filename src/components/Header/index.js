import React from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import styles from './style'

import logo from '../../assets/icons/logo.png'
import backArrow from '../../assets/icons/back.png'
import qrCode from '../../assets/icons/qrCode.png'
import notification from '../../assets/icons/notification.png'

export default function Header({ showNotification, showBack, pressNotification, late, navigation }) {
    function back(){
        navigation.navigate("Home")
    }
    function openQrCode(){
        navigation.navigate("QrCode")
    }

    return (
        <View style={styles.header}>

            {
                showBack ?
                    <TouchableOpacity onPress={back} style={styles.qrCode}>
                        <Image source={backArrow}  style={styles.qrCodeImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.qrCode} onPress={openQrCode}>
                        <Image source={qrCode} style={styles.qrCodeImage} />
                    </TouchableOpacity>
            }
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                <Image source={notification} style={styles.notificationImage} />
                <View style={styles.circle}>
                {
                        !!late &&
                        <Text style={styles.notificationText}>{late}</Text>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}