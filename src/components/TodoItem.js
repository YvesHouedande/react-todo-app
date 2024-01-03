import React from "react";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete-1487-svgrepo-com.svg";

export default function TodoItem({ todoData, testCompleted, editToggler, deleteItem }) {
  return (
    <div className="item">
      <div>
        <p
          className={todoData.completed ? "completed" : ""}
          onClick={() => {
            testCompleted(todoData.id);
          }}
        >
          {todoData.task}
        </p>
      </div>
      <div>
        <img src={DeleteIcon} className="icon" alt="" onClick={() => {
          deleteItem(todoData.id)
        }}/>
        <img className="icon" src={EditIcon} alt="" onClick={() => {editToggler(todoData.id)}} />
        <button className="btn">Decrire</button>
      </div>
    </div>
  );
}
