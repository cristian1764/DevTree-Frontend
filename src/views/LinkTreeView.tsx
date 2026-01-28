import DeevTreeInput from "../components/DeevTreeInput"
import { social } from "../data/social"
import { useState } from "react"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "../api/DevTreeAPI"
import type { User } from "../types"


export default function LinkTreeView() {

  const [devTreeLinks,setDevTreeLinks] =useState(social)
  // console.log(devTreeLinks)

  const queryClient =useQueryClient()
  const user : User = queryClient.getQueryData(['user'])!
  
  const {mutate} = useMutation({
    mutationFn: updateProfile,
    onError: (error)=>{
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success('Actualizado correctamente')
    },
  })

  const handleUrlChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
    const updateLinks= devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
    
    setDevTreeLinks(updateLinks)
  }

  const handleEnableLink =(socialNetwork:string)=>{
    const updateLinks =devTreeLinks.map (link => {
      if (link.name === socialNetwork ){
        if(isValidUrl(link.url)){
          return {...link, enabled: !link.enabled}
        }else
        toast.error('URL no valida')
      }
      return link
    })
    console.log(updateLinks)
    setDevTreeLinks(updateLinks)

    queryClient.setQueryData(['user'], (prevData: User) =>{
      return{
        ...prevData,
        links: JSON.stringify(updateLinks)
      }
    })
  }

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map(item =>(
          <DeevTreeInput
            key={item.name}
            item= {item}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
          />
        ))}
        <button className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-none"
        onClick={() =>mutate(user)}
        >
          Guardar cambios
        </button>
      </div>
    </>
    
  )
}
