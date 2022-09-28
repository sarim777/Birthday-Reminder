import { useState } from "react";
import {data} from "./Profile"
function App(){
  const[people,setPeople]=useState(data)
  const removePerson=(id)=>{
    let newPerson =people.filter((person) => person.id!==id )
    setPeople(newPerson)
  }
  return(
        <>         
        <h3 style={{backgroundColor:"naviblue",color:"blue",fontFamily:"cursive",fontSize:"40px", textAlign:"center"}}>YOU HAVE {people.length} TODAY</h3>
        {people.map((person) =>{const{id,name,Image,age,location}=person
        return(
            <div className="container" key={id}>
              <img src={Image} alt={name}/>
              <ul>
                 <li> <h3>{name}</h3></li>
                 <li> <h3>{age}</h3></li>
                <li><h3>{location}</h3></li>
              </ul>
              
              <button className="btn" onClick={()=> removePerson(id)}>Dismiss</button>
            </div>
    )
  })}
    </>
  )
}
export default App