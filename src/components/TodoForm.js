import React, { useState } from "react";

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); // Correction de la faute d'orthographe
    try{
        const response = await  fetch("api/todo/create/", {
        method:"POST",
        headers:{
          "content-type":"Application/json"
        },
        body:JSON.stringify({title:value})
      })
  
      if(response.ok){
        console.log("Reussite pour la création de la Todo")
        addTodo(value);
        setValue("");
      }
  
      
    }catch(error){
      console.log("There was an error")
    }



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
