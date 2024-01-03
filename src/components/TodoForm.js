import React, { useState } from "react";

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Correction de la faute d'orthographe
    addTodo(value);
    
    setValue("");

  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Entrer Une Todo"
      />
      <button className="btn">Enregistrer</button>
    </form>
  );
}
