import React from 'react'
import Listitem from './Todoitem'

const Todolist = (props) => {
    return (
        <div className={"card"}>
            <div className={"card-header"}>
                <h6>Todo List</h6>
            </div>
            <div className={"card-body"}>
                <ul className={"list-group"}>
                    {props.todoProp.map((item) =>(
                        <Listitem 
                            key={item.id} 
                            itemProp={item} 
                            itemCompletedChangeProp={props.handleCompletedChangeProp}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}



export default Todolist