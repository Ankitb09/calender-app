import React from 'react';


const ReminderList = (props) => {
    let lists = props.list.map((item) => {
        return (<div style={{ backgroundColor: item.color }}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>)
    })

    return (<ul>
        {lists}
    </ul>
    )
}

export default ReminderList;