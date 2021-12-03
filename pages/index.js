import React from 'react';
import { useState } from 'react';
import Nav from './nav';

export default function Index(){
  let [ph, updatePh] = useState(0)
  let [user, updateUser] = useState("")
  return(
    <div>
      <Nav />
      <div className="inp">
    <input placeholder="Enter valid phone number" type="number" maxLength="10"
     onChange={(e)=>updatePh(e.target.value)}/>
    <input placeholder="Enter valid username" type="alphanumeric" 
     onChange={(e)=>updateUser(e.target.value)}/><br/>
    </div>
     <div className="btn">
    <a className="tag" href={`https://api.whatsapp.com/send/?phone=${ph}&text&app_absent=0`}>Chat in Whatsapp<img width="30px" src="https://img.icons8.com/material-rounded/50/000000/whatsapp.png"/></a>
    <a className="tag" href={`https://t.me/${user}`}>Chat in Telegram<img width="30px" src="https://img.icons8.com/material-sharp/24/000000/telegram-app.png"/></a>
    </div>
    </div>
  )
}