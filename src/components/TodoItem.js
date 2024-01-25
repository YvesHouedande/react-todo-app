import React from "react";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete-1487-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function TodoItem({ todoData, testCompleted, editToggler, deleteItem }) {

  const handleCompleted = async ()=>{
    try {
        const response = await fetch(`/api/todo/update/${todoData?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todoData?.completed}), 
      });

      if (response.ok) {
        console.log("Mise à jour réussie !");
       testCompleted(todoData?.id)
      } else {
        console.error("Échec de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }

  };

  const handle_deletion = async ()=>{
    try {
     const response = await fetch(`api/todo/delete/${todoData?.id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({id:todoData?.id})
    })

    if (response.ok) {
      deleteItem(todoData?.id)
      
    }
    } catch (error) {
      alert("Une erreur s'est produite")
    }
  }

  return (
    <div className="item">
      <div >
        <p
          className={todoData?.completed ? "completed" : ""}
          onClick={handleCompleted}
        >
          {todoData.title}
        </p>
      </div>
      <div>
        <img src={DeleteIcon} className="icon" alt="" onClick={() => {
          handle_deletion()
        }}/>
        <img className="icon" src={EditIcon} alt="" onClick={() => {editToggler(todoData.id)}} />
        <button className="btn" onClick={() => {editToggler(todoData.id)}} ><Link to={`des/${todoData.id}`}>Decrire</Link></button>
      </div>
    </div>

  );
}
