import React, { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";

export const TodoDesc = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null)
  
  const getTodo = async () => {
    const response = await fetch(`/api/todo/${id}`)
    const data = await response.json()
    setTodo(data)
  }

  useEffect(() => {
    getTodo(id);
  }, [])
  return (
    <textarea defaultValue={todo?.title} name="" id="" cols="100" rows="10"></textarea>
  );
};
