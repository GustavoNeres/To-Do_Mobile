import React, { useState, useEffect  } from 'react'
import { View, Image, Alert, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, Switch, Touchable, ActivityIndicator } from 'react-native'
import styles from './style'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DateTimeInput from '../../components/DateTimeInput/index.android.js'

import taskService from '../../services/taskService'

import typeIcon from '../../utils/typeIcons'
import trash from '../../assets/icons/trash.png'

export default function Task({ navigation }) {
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [type, setType] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [macaddress, setMacaddress] = useState()
    const [load, setLoad] = useState(true);

    async function validator() {
        if (!title || !description || !type || !date || !hour) {
            return Alert.alert(`Por favor preencha todos os dados!`)
        }
        try {
            if (id) {
                const task = {
                    macaddress,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`
                }
                await taskService.editTask(task, id)
            } else {
                const task = {
                    macaddress,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`
                }
                await taskService.createTask(task)
            }

            navigation.navigate("Home");

        } catch (err) {
            Alert.alert(err)
        }
    }

    async function getIp() {
        const ip = await taskService.getIp()
        setMacaddress(ip)
    }

    async function removeTask() {

        Alert.alert(
            'Remover tarefa',
            'Deseja realmente remover essa tarefa',
            [
                { text: 'Cancelar' },
                { text: 'Confirmar', onPress: () => taskService.removeTask(id).then(
                    () => navigation.navigate("Home")
                ) }
            ]
        )
    }

    async function loadTaskForId() {

        const task = await taskService.loadTaskForId(id)
        setTitle(task.title)
        setType(task.type)
        setDone(task.done)
        setDescription(task.description)
        setDate(task.when)
        setHour(task.when)


    }

    useEffect(() => {

        if (!!navigation.state.params) {
            const id = navigation.state.params.idTask
            setId(id)
            try{
                loadTaskForId().then(() => setLoad(false));
            }catch(err){
                alert(err)
            }
        }
        getIp().then(() => setLoad(false))
    }, [id])

    return (
        <KeyboardAvoidingView style={styles.container}>

            <Header showBack={true} navigation={navigation} />
            {
                load ?
                    <ActivityIndicator color='#AB47BC' size={50} style={{ marginTop: 200 }} />
                    :
                    <ScrollView style={{ width: '100%' }}>
                        <ScrollView horizontal={true} style={{ marginVertical: 20 }} showsHorizontalScrollIndicator={false}>

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
                        <TextInput style={styles.inputTextArea} multiline={true} maxLength={200} placeholder="Detalhes da atividade" onChangeText={(text) => setDescription(text)} value={description}></TextInput>

                        <DateTimeInput type={'date'} save={setDate} date={date} />
                        <DateTimeInput type={'hour'} save={setHour} hour={hour} />

                        <View style={styles.inLine}>
                            <View style={styles.inputInLine}>
                                <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#AB47BC' : '#424242'} />
                                <Text style={styles.switchLabel}>Concluído</Text>
                            </View>
                            {
                                !!id &&
                                <TouchableOpacity onPress={removeTask} style={styles.inputInLine}>
                                    <Image source={trash} style={styles.trashImage} />
                                    <Text style={styles.textRemove}>EXCLUÍR</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </ScrollView>
            }

            <Footer icon={'save'} onPress={validator} />
        </KeyboardAvoidingView>
    )
}
