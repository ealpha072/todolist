import React from 'react'

const Listitem = (props) => {
    return (
        <li className={"list-group-item"}>
            <input type="checkbox" checked={props.itemProp.completed} onChange={()=>props.itemCompletedChangeProp(props.itemProp.id)} />{props.itemProp.title}
        </li>
    )
}

export default Listitem