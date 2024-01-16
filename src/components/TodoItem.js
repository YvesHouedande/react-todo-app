import React from "react";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete-1487-svgrepo-com.svg";
import { Link } from "react-router-dom";

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
          {todoData.title}
        </p>
      </div>
      <div>
        <img src={DeleteIcon} className="icon" alt="" onClick={() => {
          deleteItem(todoData.id)
        }}/>
        <img className="icon" src={EditIcon} alt="" onClick={() => {editToggler(todoData.id)}} />
        <button className="btn"><Link to={`des/${todoData.id}`}>Decrire</Link></button>
      </div>
    </div>
  );
}
