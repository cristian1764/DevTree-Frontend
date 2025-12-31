import { isAxiosError } from 'axios'
import api from '../config/axios'
import type { User } from '../types'

export async function getUser() {
     try {
        // ...existing code...
        const {data} =await api <User>('/user')
        return data
    // ...existing code...   
    }catch (error){
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)    
        }
    }
}