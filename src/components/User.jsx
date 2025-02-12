import { Fragment, useState } from "react"

function User(){
 
const [list ,setList] =useState([])

const submitForm= (e)=>{
  e.preventDefault()
  const formResault =document.getElementById("form")
  const data ={}
  const formData =new FormData(formResault)
   for(const item of formData.entries()){

    data[item[0]]=item[1]
    
   }
  setList([...list,data])
  
  }

    return(
        <>
   <div >
  <form id="form">
  <input type="text" placeholder="first name" name="firstName"/>
    <input type="text" placeholder="last name" name="lastName" />
    <button onClick={(e)=>submitForm(e)} >add to list</button>
  </form>
   </div>
   <hr />
   <ul>
    {list.map((item,index)=>{
             
return(
  <Fragment key={index}>
  <li>
    <p>first name: {item.firstName}</p>
    <p>last name : {item.lastName}</p>
  </li>
  <hr />
  </Fragment>
)
    })}
   </ul>
   
        
        </>
  )
}

export default User;