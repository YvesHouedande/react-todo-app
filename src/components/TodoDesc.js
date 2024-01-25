import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { Link } from "react-router-dom";
import EditTitle from "./EditTitle";

export const 
TodoDesc = ({edit, editToggler }) => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null)
  const navigate = useNavigate()


  const getTodo = async () => {
    const response = await fetch(`/api/todo/${id}`)
    const data = await response.json()
    setTodo(data)
  }

  
  const updateTodoBody = async () => {
      try {
        const response = await fetch(`/api/todo/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: todo.body }), 
        });
  
        if (response.ok) {
          
          console.log("Mise à jour réussie !");
        } else {
          console.error("Échec de la mise à jour.");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
      }

      navigate("/")
      editToggler(todo.id)
    };
  

  useEffect(() => {
    getTodo(id);
  }, [id])


  return (
    <>
    <div className="Header">
      <Link to="/" onClick={()=>{editToggler(todo.id)}}><BackIcon/></Link>
      {todo && <EditTitle todoData={todo} edit={edit} />}
    </div>

    <textarea value={todo?.body} onChange={e=>{setTodo(todo=>({...todo, body:e.target.value}))}} name="" id="" cols="100" rows="10"></textarea>
    <div className="bottom">
    <button onClick={updateTodoBody} className="btn" >Enregister</button>
    </div>
    
    </>
    
  );
};
 