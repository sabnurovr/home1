import React, {useState} from "react";

export default function App(){
    const[task, setTask] = useState([
        {id: 1, title: 'Ввод', completed: false},
    ])

    const[input, setInput] = useState('')

    function todoCompleted (id) {
        setTask(task.filter(task => {
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task
        }))
    }


    function removeTask(id){
        setTask(task.filter(task => task.id !== id))
    }

    function addTask(e){
        if(e.code === 'Enter' && input.trim() !== ''){
            setTask(task.concat([{id: Date.now(), title: input}]));
            setInput('')
        }
    }

    return(
        <div>
            <h1></h1>
            <input value={input} type="text" onKeyUpCapture={(e) => addTask(e)} onChange={(e) => setInput(e.target.value)}/>
            <div>
                {task && task.map(task => {
                    return(
                        <div className="wrapper" key={task.id}>
                            <input type="checkbox" onClick={() =>todoCompleted(task.id)}/>
                            <div className="taskTitle" style={{textDecoration: task.completed?'line-through':null}}>
                                {task.title}
                            </div>
                            <div
                                onClick={() => removeTask(task.id)}
                                className="completed">&times;</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}