
import React, { useState } from 'react'
import './Todo.css';


const Todo = () => {

      const [todoList, setTodoList] = useState(['Eat breakefast','Eat lunch','Eat dinner']);
      const [task,setTask] = useState("");

      const addNewTask = () =>{
        //todolist .push ("new task");
        if(task){
        setTodoList( [ ...todoList,task] );
        setTask("");
        }
    }

    const removeTask = (index) =>{
      let temp = todoList;
      temp.splice(index,1);
      setTodoList([...temp]);
   }
      
      const showTodoList = () => {

        return todoList.map( (task, index) => <div className='d-flex task-body justify-content-between'>
            <p>{task}</p>
            <button className='btn btn-danger' onClick={() =>{ removeTask(index) }}> <i class= "fas fa-trash"></i> </button>
        </div>);

      }

    

  return (
    <div className='container'>
        <div className="card mt-5">
            <div className='card-body'>
            <h3 className="head1" style={ { color : 'black' } }>TODOLIST</h3>
                <hr />

                <div className="input-group">
                    <input className='form-control' value={task} onChange={(e) => { setTask(e.target.value) }}/>
                    <button  onClick={addNewTask} className='btn btn-warning input-group-append'>ADD TASK</button>
                </div>
                {showTodoList()}
            </div>
        </div>
     </div>
  )
}

export default Todo;