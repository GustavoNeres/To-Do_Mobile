import api from './api'
import {Alert} from 'react-native'

const taskService = {

    loadTask: async function(filter, mac){
        try{
            const task = await api.get(`/task/filter/${filter}/${mac}`)
            return task
        }
        catch(err){
            console.log(err)
        }
    },
    loadTaskLate: async function(mac) {
        try{
            const tasks = await api.get(`/task/filter/late/11:11:11:11:11:AB`)
            Alert.alert(mac)
            return tasks
        }catch(err){
            alert(err)
        }
    },
    createTask: async function (input){
        try{
            await api.post(`/task`, input)
        }catch(err){
            alert(err)
        }
    },



}

export default taskService