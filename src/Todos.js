import React from "react";
import Item from "./Item";
const Todos = (props) => {
  return (
    <div className="container my-4">
      <h3 className="my-4"> Todos List </h3>
      {props.todolist.length === 0 ? "No todo items to display" :
      props.todolist.map((todo) => {
        
        return( <>  <Item todo={todo} key = {todo.sno} onDelete={props.onDelete}/> <hr></hr></>
        )
      })
     }

    </div>
  );
};

export default Todos;
