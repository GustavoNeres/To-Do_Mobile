import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import styles from './style'
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as NetWork from 'expo-network'

export default function QrCode({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    async function getIp() {
        await NetWork.getIpAddressAsync().then((ip) => {
            Alert.alert(`Seu código é: ${ip}`)
        })
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })
    })

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        if (data === 'getmacaddress') {
            getIp()
        } else {
            Alert.alert('QrCode Invalido')
        }
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}   style={StyleSheet.absoluteFillObject} />

            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Conectar com minha conta WEB
                 </Text>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>
                        VOLTAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScan} onPress={() => setScanned(false)}>
                    <Text style={styles.textButton}>
                        SCAN NOVAMENTE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}