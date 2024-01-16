import React from "react";
import { useState } from "react";

export default function EditItem({ todoData, edit }) {
  const [value, setValue] = useState(todoData?.title);

  const handleSubmit = (e) => {
    e.preventDefault(); // Correction de la faute d'orthographe
      
    edit(todoData.id, value);
    // setValue("");
    
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Mettre à jour votre Todo"
      />
      <button className="btn">Editer</button>
    </form>
  );
}
