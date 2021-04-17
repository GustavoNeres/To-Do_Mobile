import React, { useState, useEffect } from 'react'
import { View, Image, Alert, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, Switch, Touchable } from 'react-native'
import styles from './style'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DateTimeInput from '../../components/DateTimeInput/index.android.js'

import taskService from '../../services/taskService'

import typeIcon from '../../utils/typeIcons'
import trash from '../../assets/icons/trash.png'
import * as Network from 'expo-network';

export default function Task({navigation}) {

   async function validator(){
        if(!title || !description || !type || !date || !hour){
            return   Alert.alert(`Por favor preencha todos os dados!`)
        }
        try{
            const task = {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }
            await taskService.createTask(task)
          
            navigation.navigate("Home");
        }catch(err){
            Alert.alert(err)
        }
    } 

    async function getMacAddress(){
        const mac = await Network.getMacAddressAsync();
        setMacaddress(mac)
     }

    useEffect(() =>{
       getMacAddress()
    })
    const [done, setDone] = useState(false);
    const [type, setType] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [macaddress, setMacaddress] = useState()


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation} />
            <ScrollView style={{ width: '100%' }}>
                <ScrollView horizontal={true} style={{ marginVertical: 20}} showsHorizontalScrollIndicator={false}>

                    {
                        typeIcon.map((icon, index) => (
                            icon !== null &&
                            <TouchableOpacity onPress={() => setType(index)}>
                                <Image source={icon} style={[styles.imageIcon, type && type !== index && styles.typeIconInative]} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}> Titulo </Text>
                <TextInput style={styles.input} maxLength={30} placeholder="Lembrete" onChangeText={(text) => setTitle(text)} value={title}></TextInput>

                <Text style={styles.label}> Detalhes </Text>
                <TextInput style={styles.inputTextArea} multiline={true} maxLength={200} placeholder="Detalhes da atividade" onChangeText={(text)=> setDescription(text)} value={description}></TextInput>

                <DateTimeInput type={'date'} save={setDate} />
                <DateTimeInput type={'hour'} save={setHour} />

                <View style={styles.inLine}>
                    <View style={styles.inputInLine}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#AB47BC' : '#424242'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>
                    <TouchableOpacity style={styles.inputInLine}>  
                 <Image source={trash} style={styles.trashImage}/> 
                        <Text style={styles.textRemove}>EXCLUÍR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Footer icon={'save'} onPress={validator} />
        </KeyboardAvoidingView>
    )
}
