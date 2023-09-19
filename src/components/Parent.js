import React  , {useState} from "react";
import Child from "./Child";
const Parent = () => {
const[inputValue , setInputValue] = useState("");
 
   return(
    <div className="parent">
        <h1> 
            Parent Coponent
        </h1>
       <p>{inputValue}</p>
       <Child  prop = {setInputValue} />
    </div>
   )
}

export default Parent
