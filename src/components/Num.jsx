import { useState } from "react";

function Num(){
const [number, setNumber] =useState(2)
 


return(
    <>
    <button onClick={()=>setNumber(number+1)}>icrease number</button>
    <br />
    <p>number:{number}</p>
    </>
)
}
export default Num;