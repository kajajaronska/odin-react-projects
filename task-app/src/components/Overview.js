import React from 'react';


const Overview = (props) => {
    const { tasks } = props;

    return tasks.length > 0 ? (
        <ul>
            {tasks.map((task)=>{
                return <li key={task.index}>{task.name}</li>
            })}
        </ul>
    ) : (
        <p>No tasks added yet</p>
    )
}

export default Overview;
