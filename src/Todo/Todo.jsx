import React, { useEffect, useRef, useState } from "react";
import "./todo.css";
import { MdCheck,MdDeleteForever } from "react-icons/md";
const Todo = () => {
    const [item,setItems]=useState('');
    const [task,setTask]=useState([]);
    const [dateTime,setDateTime]=useState('');
    const ref=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!item) return;
        if(task.includes(item)) return alert("item is an already exist!!!") ;
        setTask((prevTask)=>[...prevTask,item])
        localStorage.setItem("task",JSON.stringify(task))
        setItems('')

        
        
        

    }
    const handleChange=(e)=>{
        // event.preventDefault()
        setItems(e)
        
        
    }
    const deleteItem=(value)=>{
    //    delete task[index]
    //    setTask(task)
       console.log(task);
       console.log(value);

       const updatedTask=task.filter((currentEle)=>currentEle !==value)
       setTask(updatedTask)

       
       
    }
    const removeAll=()=>{
        setTask([])
    }
    const checkItem=()=>{
         console.log(ref);
         const style=ref.current.style
         style.color="red";
         style.textDecoration="line-through"
        
         

    }
    // set localstorage
    localStorage.setItem(todoKeys,JSON.stringify(task))
    useEffect(()=>{
       let interval= setInterval(()=>{
        
            const now=new Date();
            const formattedDate=now.toLocaleDateString();
            const formattedTime=now.toLocaleTimeString();
             setDateTime(`${formattedDate} - ${formattedTime}`)
            })
        // console.log(interval);
        console.log(dateTime);
        
        
        return ()=>{
            clearInterval(interval)
        }
    },[])
    
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <section>
            <h3>{dateTime}</h3>
        </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text"  className="todo-input" name="firstName" id="" onChange={(e)=>{handleChange(e.target.value)}} value={item.firstName} autoComplete="off" />
          </div>
          
          <div>
            <button className="todo-btn">Add Task</button>
          </div>
        </form>
        <div >
            {
                task.map((items,index)=>{
                       return <ul key={index} >
                          <li >
                            <span className="item" ref={ref}>{items}</span>
                            <button className="check-btn" onClick={checkItem}><MdCheck/></button>
                            <button className="delete-btn" onClick={()=>{deleteItem(items)}}><MdDeleteForever/></button>
                          </li>
                       </ul>
                })
            }
          </div>
          <div>
            <button className="clear-btn" onClick={removeAll} >Clear All</button>
          </div>
      </section>
      </section>
    </>
  );
};

export default Todo;
