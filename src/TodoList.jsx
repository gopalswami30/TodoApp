import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const TodoList=(props)=>{
 const[line,setLine]=useState(false)   
const cutFrom=()=>{
setLine(true)
} 

return (
<>
<div className="todoStyle">
<span onClick={cutFrom}><DeleteIcon className="delIcon"/></span>  
<li style={{textDecoration:line ? 'line-through':"none"}}>    {props.pass}</li></div>
    </>)}
export default TodoList