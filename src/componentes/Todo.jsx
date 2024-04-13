import { useState } from "react"
import "../CSS/Todo.css"
import { useRef } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem";


let count = 0;
const Todo=()=> {

 const [todos,setTodos] = useState([]);
 const inputref = useRef(null);
 
 const add = ()=>{
   setTodos([...todos,{no:count++, text:inputref.current.value,display:""}]);
   inputref.current.value = "";
   localStorage.setItem("todos-count",count)
 }
  useEffect(() => {
  setTodos(JSON.parse(localStorage.getItem("todos")))
  count = localStorage.getItem("todos-count")
  },[])

 useEffect(() => {
    setTimeout(() => {
        console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
    }, 100);
    
 }, [todos])
  
  return (
    <div className="todo">
        <div className="header">TODO-LIST</div>
        <div className="todo-text">
            <input ref={inputref} type="text" placeholder="enter text" className="todo-input"/>
           <div onClick={()=>{add()}} className="todo-add">ADD</div>
        </div>
      <div className="todo-lis">
       {todos.map((item,index)=>{
          return <TodoItem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
       })}
      </div>
    </div>
  )
}

export default Todo