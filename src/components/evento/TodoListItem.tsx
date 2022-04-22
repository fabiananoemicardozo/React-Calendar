import React, { useState } from "react";
import { EditTodo, Option, RemoveTodo, Todo, ToggleComplete } from "../../types/types";

import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  }

  const onEdit = () => {
    console.log('edit');
  }

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    editTodo(text);
  }

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    }
  ]


  const [event, setEvent] = useState<boolean>(false);

  const isEvent = (date: string) => {
    {console.log(date)}
    setEvent(true)
  }

  const noEvent = () => {
    setEvent(false)
  }
  return (
    <li className={todo.complete? "todo-row completed" : "todo-row"}>
      <label onClick={() => isEvent} >
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {isEditOn ? <input className="edit-input" type="text" value={inputText} onChange={(e) => onTodoUpdate(e)}/> : todo.text}
      </label>
      <Dropdown
        options={dropdownOptions}
      />
    </li>
  )
}