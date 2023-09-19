import React  , {useState} from "react";

const Child = ({prop}) => {
     

    function changeValue(e){
      prop(e.target.value) 
    }

  return(
    <div className="child">
        <h1>Child Component</h1>
        <input onChange={changeValue} type="text" />
    </div> 
  )
}
export default Child;