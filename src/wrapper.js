import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditItem from "./components/EditItem";

export default function Wrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    if (value)
      setTodos([
        ...todos,
        { task: value, completed: false, id: todos.length, isEditing: false },
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
    setTodos(todos.map(
      (item, index) => 
        id===index? {...item, isEditing:!item.isEditing}:item
      
    ))
    
  }

  const deleteItem = (id) => {
    setTodos(todos.filter((item, index)=> id===index? null:item ))
  }

  const edit = (id, value) => {
        if(value)setTodos(
          todos.map((item, index) =>
            id === index ? { ...item, task: value, isEditing: false } : item
          )
    );
  }

  return (
    <div className="wrapper">
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
    </div>
  );
}
