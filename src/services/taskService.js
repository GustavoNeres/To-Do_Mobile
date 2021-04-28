import api from './api'
import * as Network from 'expo-network';


const taskService = {

    loadTask: async function(filter, ip){
        try{
            const task = await api.get(`/task/filter/${filter}/${ip}`)
            return task
        }
        catch(err){
            console.log(err)
        }
    },
    loadTaskLate: async function(ip) {
        try{
            const tasks = await api.get(`/task/filter/late/${ip}`)
            return tasks
        }catch(err){
            alert(err)
        }
    },

    loadTaskForId: async function(id) {
        try{
            const tasks = await api.get(`/task/${id}`)
            return tasks.data
        }catch(err){
           console.log(err)
        }
    },
    createTask: async function (input){
        try{
            await api.post(`/task`, input)
        }catch(err){
            alert(err)
        }
    },
    editTask: async function (input, id){
        try{
            await api.put(`/task/${id}`, input)
        }catch(err){
            alert(err)
        }
    },

    getIp: async function (){
        const ip = await Network.getIpAddressAsync();
        return ip
    },

    removeTask: async function(id){
     return await api.delete(`/task/${id}`)
    }


}

export default taskService