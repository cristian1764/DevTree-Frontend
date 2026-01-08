
import { useQuery } from '@tanstack/react-query'

import { getUser } from "../api/DevTreeAPI";
import DeevTree from "../components/DeevTree";
import { Navigate } from 'react-router-dom';


export default function AppLayout() {

    const {data,isLoading,isError} =useQuery({
        queryFn:getUser,
        queryKey: ['user'],
        retry:1,
        refetchOnWindowFocus:false
    })
    if(isLoading) return 'cargando'
    if(isError) return <Navigate to={'/auth/login'}/>
    if(data) return  <DeevTree data={data}/>
        
    
}