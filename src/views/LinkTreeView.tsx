import DeevTreeInput from "../components/DeevTreeInput"
import { social } from "../data/social"
import { useState } from "react"


export default function LinkTreeView() {

  const [devTreeLinks,setDevTreeLinks] =useState(social)
  // console.log(devTreeLinks)

  const handleUrlChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
    const updateLinks= devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
    console.log(updateLinks)
    setDevTreeLinks(updateLinks)
  }
  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map(item =>(
          <DeevTreeInput
            key={item.name}
            item= {item}
            handleUrlChange={handleUrlChange}
          />
        ))}
      </div>
    </>
    
  )
}
