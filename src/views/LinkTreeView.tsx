import DeevTreeInput from "../components/DeevTreeInput"
import { social } from "../data/social"
import { useState } from "react"


export default function LinkTreeView() {

  const [devTreeLinks,setDevTreeLinks] =useState(social)
  // console.log(devTreeLinks)
  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map(item =>(
          <DeevTreeInput
            key={item.name}
            item= {item}
          />
        ))}
      </div>
    </>
    
  )
}
