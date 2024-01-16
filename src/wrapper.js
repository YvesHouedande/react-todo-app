import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditItem from "./components/EditItem";
import { Route, Routes } from "react-router-dom";
import { TodoDesc } from "./components/TodoDesc";

export default function Wrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    if (value)
      setTodos([
        ...todos,
        { title: value, completed: false, id: todos.length, isEditing: false },
      ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((item) =>
        id === item.id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => (id === item.id ? null : item)));
  };

  const edit = (id, value) => {
    if (value)
      setTodos(
        todos.map((item, index) =>
          id === item.id
            ? { ...item, title: value, isEditing: !item.isEditing }
            : item
        )
      );
  };

  //Load my data
  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todos/");
      const data = await response.json();

      setTodos(data.map((item, index) => ({ ...item, isEditing: false })));
    } catch (error) {
      console.error("Erreur lors du chargement des tâches", error);
    }
  };

  useEffect(() => {
    fetchTodos();
    
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TodoForm addTodo={addTodo} />
              {todos.map((item, index) =>
                !item.isEditing ? (
                  <TodoItem
                    todoData={item}
                    key={index}
                    testCompleted={toggleComplete}
                    editToggler={toggleEdit}
                    deleteItem={deleteItem}
                  />
                ) : (
                  <EditItem key={index} todoData={item} edit={edit} />
                )
              )}
            </>
          }
        />
        <Route path="des/:id" element={ <TodoDesc/> } />
      </Routes>
    </div>
  );
}
