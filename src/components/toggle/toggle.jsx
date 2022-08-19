
import { useState } from "react";
import "./toggle.css";
function Toggle() {
 const [set,IsSet]= useState(false);
 function setIsSet (){
    IsSet(true);
 }
    return (
        <div className={set ? "dark-mode":"dark"}>
        <input type="checkbox" className='checkbox' id='checkbox'/>
    <label htmlFor="checkbox" className={set ? "label":"label1"}>
      <div className={set ? "ball":"ball1"} onClick={setIsSet}></div>
    </label>
        </div>

    
    )
}
export default Toggle;