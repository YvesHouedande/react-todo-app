import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditTitle({ todoData, edit }) {
  const [editedTitle, setEditedTitle] = useState(todoData?.title);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit();
  };


  // make api called
  const handleEdit = async ()=>{
    try {
        const response = await fetch(`/api/todo/update/${todoData?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editedTitle }), 
      });

      if (response.ok) {
        console.log("Mise à jour réussie !");
        edit(todoData.id, editedTitle);
      } else {
        console.error("Échec de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }

    navigate("/")
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder="Mettre à jour le titre"
      />
      <button className="btn" type="submit">
        Editer
      </button>
    </form>
  );
}
