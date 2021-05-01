import React, { useState } from 'react'
import TodoList from './TodoList.jsx'
const App=()=>{
    const [element,setEle]=useState("")
    const [listElement,setElemnet]=useState([])
    const insertTask=(event)=>{
     setEle(event.target.value)   
    }
    const getDone=()=>{
      setElemnet((olditem)=>{
      return [...olditem,element]
      }
      )
    }
    return(
        <>
        <div className="mainDiv">
        <div className="centerDiv">
        <br/>
         <h1>Todo App</h1>
         <br/>
         <input type='text' placeholder='Add a Task' onChange={insertTask} ></input> 
         <button onClick={getDone}>+</button>
         <ol>
          {listElement.map((curelem,index)=>{
          return <TodoList  pass={curelem}/>
          })}  
         </ol>  
         </div></div>
        </>
    )
}
export default App
