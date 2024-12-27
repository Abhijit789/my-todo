import React, { useRef, useState } from 'react'
import './todo.css'
import { MdCheck, MdDelete } from 'react-icons/md';
const Todo1 = () => {
    const [item,setItems]=useState('');
    const [task,setTask]=useState([]);
    const ref=useRef()

    // handlechange()
    const handleChange=(e)=>{
        setItems(e)
        console.log(item);
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!item)return ;
        if(task.includes(item)) return;
        setTask((prevState)=>[...prevState,item])
        setItems('')

    }
    // deleteHandle
    const handleDelete=(value)=>{
          const updateTask=task.filter((cValue)=>cValue!==value)
          setTask(updateTask)
    }
    const deleteAll=()=>{
        setTask([])
    }
  return (
    <>
     <section className='todo-container'>
        <header>
            <h1>TODO LIST</h1>
        </header>
        <section>
            <h3>DATE AND TIME</h3>
        </section>
         <section className='form'>
            <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={item} onChange={(e)=>{handleChange(e.target.value)}}  className="todo-input" name="firstName" id="" autoComplete="off" />
          </div>
          
          <div>
            <button className="todo-btn">Add Task</button>
          </div>

            </form>
         </section>
         <section className='myUnOrdList'>
            {
                <ul>
                    {
                task.map((cItem)=>{
                     return <li>
                            <span className='item'>{cItem}</span>
                            <div>
                                
                            <button className='check-btn'><MdCheck/></button>
                            <button className='delete-btn' onClick={()=>{handleDelete(cItem)}}><MdDelete/></button>
                            </div>
                        </li>
                     
                })
            }
                </ul>

            }
         </section>
         <button className='clear-btn' onClick={deleteAll}>Clear All</button>
     </section>
      
    </>
  )
}

export default Todo1
