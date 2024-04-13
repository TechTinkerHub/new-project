import '../CSS/Item.css'
import cross from "../Assetes/cross.png"
import tick from "../Assetes/tick.png"
import notthick from "../Assetes/not_tick.png"


const TodoItem = ({no,display,text,setTodos}) => {

    const deletTodo = (no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=>todo.no!==no);
        setTodos(data);

    }

const toggel = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i =0;i < data.length;i++)
    {
        if(data[i].no===no){
           if(data[i].display===""){
            data[i].display ="line-throug";
           }else{
            data[i].display ="";
           }
           break;
        }
    }
    setTodos(data);
}

  return (
    <div className='todo-item'>
        <div className={`container${display}`} onClick={()=>{toggel(no)}}>
            {display===""?<img src={notthick} alt="" />:<img src={tick} alt="" />}
            
            <div className="todoitemes">{text}</div>
        </div>
        <img onClick={()=>{deletTodo(no)}} className='todo-crossicon' src={cross} alt="" />
        
    </div>
  )
}

export default TodoItem