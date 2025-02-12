import { useState } from "react";

function Login(){
    
const [username, setUsername] =useState("")
 const handleChange =(e)=>{
setUsername(e.target.value)

 }
 const [password , setPassword] =useState("")
  
 const handleChange2=(e)=>{
    setPassword(e.target.value)
 }


return(
    <>
    <input onChange={(e)=>handleChange(e)} type="text" />
    <br />
    <input type="password" onChange={(e)=>handleChange2(e)} />
    <br />
    <p>{username}</p>
    <br />
    <p>{password }</p>
    </>
)

}

export default Login;