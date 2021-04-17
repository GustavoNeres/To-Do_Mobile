import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import styles from './style'

import taskService from '../../services/taskService'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaskCard from '../../components/TaskCard'
import * as Network from 'expo-network';
export default function Home({ navigation }) {
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false)
    const [lateCount, setLateCount] = useState()
    const [macaddress, setMacaddress] = useState()

    async function loadTask() {
        setLoad(true)
        getMacAddress()
        const task = await taskService.loadTask(filter, macaddress )
        setTasks(task.data)
        setLoad(false)
    }
    async function lateVerify() {
        setLoad(true)
        await getMacAddress()
        const taskLate = await taskService.loadTaskLate(macaddress)
        setLateCount(taskLate.data.length)
        setLoad(false)
    }

    function notificantion(){
        setFilter('late')
    }

    function routeNav(){
        navigation.navigate("Task");
    }
     async function getMacAddress(){
        const mac = await Network.getMacAddressAsync();
        setMacaddress(mac)
     }
    useEffect(() => {
        lateVerify();
        loadTask()
    }, [filter])
    return (
        <View style={styles.container}>
            <Header showNotification={true} showBack={false} pressNotification={notificantion} late={lateCount} />

            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter === 'all' ? styles.filterTextActive : styles.filterTextInative}>TODOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter === 'today' ? styles.filterTextActive : styles.filterTextInative}>HOJE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter === 'month' ? styles.filterTextActive : styles.filterTextInative}>MÊS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter === 'week' ? styles.filterTextActive : styles.filterTextInative}>SEMANA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter === 'year' ? styles.filterTextActive : styles.filterTextInative}>ANO</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>{filter === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
                { load ?

                    <ActivityIndicator color='#AB47BC' size={50}/>
                    :
                
                    tasks.map(t => (
                        <TaskCard title={t.title} when={t.when} type={t.type} />
                        ))
                    
                }
            </ScrollView>
            <Footer  icon={'add'} onPress={routeNav} />
        </View>
    )
}