import { isAxiosError } from 'axios'
import api from '../config/axios'
import type { ProfileForm, User } from '../types'

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

export async function updateProfile(formData:ProfileForm) {
     try {
        // ...existing code...
        const {data} =await api.patch <string>('/user',formData)
        
        return data
    // ...existing code...   
    }catch (error){
        if(isAxiosError(error)&&error.response){
            console.log(error.response.data.error)
            throw new Error(error.response.data.error)    
        }
    }
}

export async function uploadiamge(file:File) {
    let formData = new FormData
    formData.append('file',file)
     try {
        // ...existing code...
        const {data:{image}}: {data:{image:string}} = await api.post ('/user/image',formData)
        return image
       
    // ...existing code...   
    }catch (error){
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)    
        }
    }
}