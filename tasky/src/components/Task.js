import React from "react";

const Task = (props) => {
    let color = "";
    switch(props.priority){
        case"low":
        color = '#45a049';
        break;
        case"medium":
        color = 'darkorange';
        break;
        case"high":
        color = 'red';
        break;
        default:
            color = '#5bb4c4';
    }
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <div className="priority" style={{backgroundColor: color}}>{props.priority}</div>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}
export default Task