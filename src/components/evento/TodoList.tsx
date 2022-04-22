import React from "react";
import { EditTodo, RemoveTodo, Todo, ToggleComplete } from "../../types/types";

import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoList = ({ todos, toggleComplete, onRemoveTodo, editTodo }: TodoListProps) => {
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
     ))}
    </ul>
  );
};